'use strict';

// var CLOUD_WIDTH = 270;
// var CLOUD_HEIGHT = 420;
// var CLOUD_X = 150;
// var CLOUD_Y = 10;
// var GAP = 10;
// var WIDTH_GAP = 50;
// var FONT_GAP = 15;
// var TEXT_WIDTH = 30;
// var BAR_WIDTH = 40;
// var barHeight = CLOUD_WIDTH - GAP - CLOUD_X + GAP + BAR_WIDTH - GAP;

// var renderCloud = function(ctx, x, y, color) {
//   ctx.fillStyle = color;
//   ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
// };

// var getMaxElement = function(arr) {
//   var maxElement = arr[0];

//   for (var i = 1; i < arr.length; i++) {
//     if (arr[i] > maxElement) {
//       maxElement = arr[i];
//     }
//   }

//   return maxElement;
// };


// window.renderStatistics = function(ctx, players, times) {
//   ctx.translate(0, CLOUD_HEIGHT);
//   ctx.rotate(-Math.PI/2);
//   ctx.save();
//   renderCloud(
//     ctx,
//     CLOUD_X - GAP,
//     CLOUD_Y + GAP,
//     'rgba(0, 0, 0, 0.7)'
//     );
//     renderCloud(
//       ctx,
//       CLOUD_X,
//       CLOUD_Y,
//       '#fff'
//       );

//       ctx.translate(0, CLOUD_HEIGHT);
//       ctx.rotate(-Math.PI/2);
//       ctx.save();
//       ctx.fillStyle = '#000000';
//       ctx.font = {SIZE: '16px', FAMILY: 'PT Mono'};
//       ctx.fillText('Ура вы победили!', 50, 210);
//       ctx.fillText('Список результатов:', 110, 70);

//       var maxTime = getMaxElement(times);

//   for (var i = 0; i < players.length; i++) {

//     ctx.fillText(
//       players[i],
//       CLOUD_X + GAP,
//       CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_WIDTH) * i
//     );
//     ctx.fillRect(
//       CLOUD_X + GAP + TEXT_WIDTH,
//       CLOUD_Y + GAP + TEXT_WIDTH + (GAP + WIDTH_GAP + BAR_WIDTH) * i,
//       (barHeight * times[i]) / maxTime,
//       BAR_WIDTH
//     );
//   }
// };


// Константы

var CLOUD_WIDTH = 420; //ширина поля
var CLOUD_HEIGHT = 270; //высота поля
var CLOUD_X = 100; //координаты по горизонтали
var CLOUD_Y = 10; //координаты по вертикали
var GAP = 10; //смещение тени
var WIDTH_GAP = 50; //растояние между столбцами
var LOCATION_BOTTOM = 260; //начальное расположение с низу
var BAR_WIDTH = 40 //ширина столбца
var barHeight = CLOUD_HEIGHT - GAP - CLOUD_X - GAP //высота столбца


// Функция отрисовки облака
var renderingCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function(ctx) {
  renderingCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderingCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

  ctx.fillStyle = '#000000';
  ctx.font = {SIZE: '16px', FAMILY: 'PT Mono'};
  ctx.fillText('Ура вы победили!', 110, 50);
  ctx.fillText('Список результатов:', 110, 70);


// Учаcтники

  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillText('Вы', 150, 260);
  ctx.fillRect(150, 90, 40, 120);
  ctx.fillText('2725', 150, 90);

  ctx.fillStyle = 'hsl(240, 100%, 60%)';
  ctx.fillText('Кирилл', 235, 260);
  ctx.fillRect(240, 90, 40, 150);

  ctx.fillStyle = 'hsl(240, 50%, 70%)';
  ctx.fillText('Вова', 330, 260);
  ctx.fillRect(330, 90, 40, 150);

  ctx.fillStyle = 'hsl(240, 20%, 80%)';
  ctx.fillText('Света', 405, 260);
  ctx.fillRect(410, 90, 40, 150);
};


