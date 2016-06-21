
'use strict';

(function() {

class MainController {

  constructor($http, $scope) {
    this.$http = $http;
    this.awesomeThings = [];

    $scope.t1 = false;
    $scope.t2 = false;
    $scope.t3 = false;
    $scope.tab1 = function(){
      $scope.t1 = true;
      $scope.t2 = false;
      $scope.t3 = false;
    };
    $scope.tab2 = function(){
      $scope.t1 = false;
      $scope.t2 = true;
      $scope.t3 = false;
    };
    $scope.tab3 = function(){
      $scope.t1 = false;
      $scope.t2 = false;
      $scope.t3 = true;
    };
    $scope.reset = function(){
      $scope.t1 = false;
      $scope.t2 = false;
      $scope.t3 = false;
    };

    $scope.options = {
      chart: {
        type: 'discreteBarChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 60,
          left: 55
        },
        x: function(d){ return d.label; },
        y: function(d){ return d.value; },
        showValues: true,
        valueFormat: function(d){
          return d3.format(',.4f')(d);
        },
        transitionDuration: 500,
        xAxis: {
          axisLabel: 'Mes'
        },
        yAxis: {
          axisLabel: 'Corriente (Amperes)',
          axisLabelDistance: 30
        }
      }
    };

    $scope.data = [{
      key: "Cumulative Return",
      values: [
        { "label" : "Enero" , "value" : 29.765957771107 },
        { "label" : "Febrero" , "value" : 56.878787877877 },
        { "label" : "Marzo" , "value" : 32.807804682612 },
        { "label" : "Abril" , "value" : 196.45946739256 },
        { "label" : "Mayo" , "value" : 89.194330906893 },
        { "label" : "Junio" , "value" : 98.079782601442 },
        { "label" : "Julio" , "value" : 13.925743130903 },
        { "label" : "Agosto" , "value" : 5.1387322875705 }
      ]
    }];

    $scope.options2 = {
      chart: {
        type: 'cumulativeLineChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 50,
          left: 65
        },
        x: function(d){ return d[0]; },
        y: function(d){ return d[1]/100; },
        average: function(d) { return d.mean/100; },

        color: d3.scale.category10().range(),
        duration: 300,
        useInteractiveGuideline: true,
        clipVoronoi: false,

        xAxis: {
          axisLabel: 'Dia',
          tickFormat: function(d) {
            return d3.time.format('%m/%d/%y')(new Date(d))
          },
          showMaxMin: false,
          staggerLabels: true
        },

        yAxis: {
          axisLabel: 'Rendimiento',
          tickFormat: function(d){
            return d3.format(',.1%')(d);
          },
          axisLabelDistance: 0
        }
      }
    };

    $scope.data2 = [
      {
        key: "Rendiemiento de la corriente",
        values: [ [ 1083297600000 , -2.974623048543] , [ 1085976000000 , -1.7740300785979] , [ 1088568000000 , 4.4681318138177] , [ 1091246400000 , 7.0242541001353] , [ 1093924800000 , 7.5709603667586] , [ 1096516800000 , 20.612245065736] , [ 1099195200000 , 21.698065237316] , [ 1101790800000 , 40.501189458018] , [ 1104469200000 , 50.464679413194] , [ 1107147600000 , 48.917421973355] , [ 1109566800000 , 63.750936549160] , [ 1112245200000 , 59.072499126460] , [ 1114833600000 , 43.373158880492] , [ 1117512000000 , 54.490918947556] , [ 1120104000000 , 56.661178852079] , [ 1122782400000 , 73.450103545496] , [ 1125460800000 , 71.714526354907] , [ 1128052800000 , 85.221664349607] , [ 1130734800000 , 77.769261392481] , [ 1133326800000 , 95.966528716500] , [ 1136005200000 , 107.59132116397] , [ 1138683600000 , 127.25740096723] , [ 1141102800000 , 122.13917498830] , [ 1143781200000 , 126.53657279774] , [ 1146369600000 , 132.39300992970] , [ 1149048000000 , 120.11238242904] , [ 1151640000000 , 118.41408917750] , [ 1154318400000 , 107.92918924621] , [ 1156996800000 , 110.28057249569] , [ 1159588800000 , 117.20485334692] , [ 1162270800000 , 141.33556756948] , [ 1164862800000 , 159.59452727893] , [ 1167541200000 , 167.09801853304] , [ 1170219600000 , 185.46849659215] , [ 1172638800000 , 184.82474099990] , [ 1175313600000 , 195.63155213887] , [ 1177905600000 , 207.40597044171] , [ 1180584000000 , 230.55966698196] , [ 1183176000000 , 239.55649035292] , [ 1185854400000 , 241.35915085208] , [ 1188532800000 , 239.89428956243] , [ 1191124800000 , 260.47781917715] , [ 1193803200000 , 276.39457482225] , [ 1196398800000 , 258.66530682672] , [ 1199077200000 , 250.98846121893] , [ 1201755600000 , 226.89902618127] , [ 1204261200000 , 227.29009273807] , [ 1206936000000 , 218.66476654350] , [ 1209528000000 , 232.46605902918] , [ 1212206400000 , 253.25667081117] , [ 1214798400000 , 235.82505363925] , [ 1217476800000 , 229.70112774254] , [ 1220155200000 , 225.18472705952] , [ 1222747200000 , 189.13661746552] , [ 1225425600000 , 149.46533007301] , [ 1228021200000 , 131.00340772114] , [ 1230699600000 , 135.18341728866] , [ 1233378000000 , 109.15296887173] , [ 1235797200000 , 84.614772549760] , [ 1238472000000 , 100.60810015326] , [ 1241064000000 , 141.50134895610] , [ 1243742400000 , 142.50405083675] , [ 1246334400000 , 139.81192372672] , [ 1249012800000 , 177.78205544583] , [ 1251691200000 , 194.73691933074] , [ 1254283200000 , 209.00838460225] , [ 1256961600000 , 198.19855877420] , [ 1259557200000 , 222.37102417812] , [ 1262235600000 , 234.24581081250] , [ 1264914000000 , 228.26087689346] , [ 1267333200000 , 248.81895126250] , [ 1270008000000 , 270.57301075186] , [ 1272600000000 , 292.64604322550] , [ 1275278400000 , 265.94088520518] , [ 1277870400000 , 237.82887467569] , [ 1280548800000 , 265.55973314204] , [ 1283227200000 , 248.30877330928] , [ 1285819200000 , 278.14870066912] , [ 1288497600000 , 292.69260960288] , [ 1291093200000 , 300.84263809599] , [ 1293771600000 , 326.17253914628] , [ 1296450000000 , 337.69335966505] , [ 1298869200000 , 339.73260965121] , [ 1301544000000 , 346.87865120765] , [ 1304136000000 , 347.92991526628] , [ 1306814400000 , 342.04627502669] , [ 1309406400000 , 333.45386231233] , [ 1312084800000 , 323.15034181243] , [ 1314763200000 , 295.66126882331] , [ 1317355200000 , 251.48014579253] , [ 1320033600000 , 295.15424257905] , [ 1322629200000 , 294.54766764397] , [ 1325307600000 , 295.72906119051] , [ 1327986000000 , 325.73351347613] , [ 1330491600000 , 340.16106061186] , [ 1333166400000 , 345.15514071490] , [ 1335758400000 , 337.10259395679] , [ 1338436800000 , 318.68216333837] , [ 1341028800000 , 317.03683945246] , [ 1343707200000 , 318.53549659997] , [ 1346385600000 , 332.85381464104] , [ 1348977600000 , 337.36534373477] , [ 1351656000000 , 350.27872156161] , [ 1354251600000 , 349.45128876100]]
        ,
        mean: 250
      },
    ];

    $scope.options3 = {
      chart: {
        type: 'multiBarChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 45,
          left: 45
        },
        clipEdge: true,
        //staggerLabels: true,
        duration: 500,
        stacked: true,
        xAxis: {
          axisLabel: 'Dias',
          showMaxMin: false,
          tickFormat: function(d){
            return d3.format(',f')(d);
          }
        },
        yAxis: {
          axisLabel: 'Incremento',
          axisLabelDistance: -20,
          tickFormat: function(d){
            return d3.format(',.1f')(d);
          }
        }
      }
    };

    $scope.data3 = generateData();

    /* Random Data Generator (took from nvd3.org) */
    function generateData() {
      return stream_layers(3,50+Math.random()*50,.1).map(function(data, i) {
        if(i == 2){
          return {
            key: 'Con EoEnergy',
            values: data
          };
        }
        if(i == 0) {
          return {
            key: 'Sin EoEnergy',
            values: data
          };
        }
        if(i == 1) {
          return {
            key: 'Rendimiento',
            values: data
          };
        }
      });
    }

    /* Inspired by Lee Byron's test data generator. */
    function stream_layers(n, m, o) {
      if (arguments.length < 3) o = 0;
      function bump(a) {
        var x = 1 / (.1 + Math.random()),
          y = 2 * Math.random() - .5,
          z = 10 / (.1 + Math.random());
        for (var i = 0; i < m; i++) {
          var w = (i / m - y) * z;
          a[i] += x * Math.exp(-w * w);
        }
      }
      return d3.range(n).map(function() {
        var a = [], i;
        for (i = 0; i < m; i++) a[i] = o + o * Math.random();
        for (i = 0; i < 5; i++) bump(a);
        return a.map(stream_index);
      });
    }

    /* Another layer generator using gamma distributions. */
    function stream_waves(n, m) {
      return d3.range(n).map(function(i) {
        return d3.range(m).map(function(j) {
          var x = 20 * j / m - i / 3;
          return 2 * x * Math.exp(-.5 * x);
        }).map(stream_index);
      });
    }

    function stream_index(d, i) {
      return {x: i, y: Math.max(0, d)};
    }

  }

  $onInit() {
    this.$http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
    });
  }
}

angular.module('eoenergyApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });

})();
