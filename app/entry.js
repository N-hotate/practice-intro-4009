'use strict';
import $ from 'jquery';
const block = $('#block');
const scalingButton = $('#scaling-button');

scalingButton.on('click', () => {
  block.animate({ width: '200pt', height: '200pt' }, 2000);
  block.animate({ width: '100pt', height: '100pt' }, 2000);
});

const movingButton = $('#moving-button');

movingButton.on('click', () => {
  block.animate({ 'marginLeft': '500px' }, 500);
  block.animate({ 'marginLeft': '20px' }, 1000);
});

const loadavg = $('#loadavg');

import io from 'socket.io-client';
const socket = io('http://localhost:8000');
socket.on('server-status', (data) => {
  loadavg.text(data.loadavg.toString());
});

socket.on('connect', () => {
  console.log('接続しました');
});
socket.on('disconnect', () => {
  console.log('切断しました');
});