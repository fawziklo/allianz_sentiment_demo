import { Injectable } from "@angular/core";
import * as tf from '@tensorflow/tfjs';



@Injectable({
  providedIn: 'root'
})
export class SentimentAnalysisService {
  metaData = { word: '' };

  public async loadModel() {
    return await tf.loadLayersModel('https://storage.googleapis.com/tfjs-models/tfjs/sentiment_cnn_v1/model.json');
  }

  public async loadMetaData() {
    return await (await fetch("https://storage.googleapis.com/tfjs-models/tfjs/sentiment_cnn_v1/metadata.json")).json();
  }

  public predict(text, metadata, model) {
    const trimmed = text.trim().toLowerCase().replace(/(\.|\,|\!)/g, '').split(' ');
    const sequence = trimmed.map(word => {
      let wordIndex = metadata.word_index[word];
      if (typeof wordIndex === 'undefined') {
        return 3;
      }
      return wordIndex + metadata.index_from;
    });

    const paddedSequence = this.padSequences([sequence], metadata);
    const input = tf.tensor2d(paddedSequence, [1, metadata.max_len]);

    const predictOut = model.predict(input);
    const score = predictOut.dataSync()[0];
    let s = this.getSentiment(score)
    console.log(s)
    return s;
  }

  private padSequences = (sequences, metadata) => {
    return sequences.map(seq => {
      if (seq.length > metadata.max_len) {
        seq.splice(0, seq.length - metadata.max_len);
      }
      if (seq.length < metadata.max_len) {
        const pad = [];
        for (let i = 0; i < metadata.max_len - seq.length; ++i) {
          pad.push(0);
        }
        seq = pad.concat(seq);
      }
      return seq;
    });
  }

  private getSentiment(score) {
    if (score > 0.66) {
      return 1;
    }
    else if (score > 0.4) {
      return 2;
    }
    else {
      return -1;
    }
  }


}