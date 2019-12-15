<template>
  <div class="container">
    <div class="row my-4">
      <div class="col-12">
        <b-button variant="info" class="float-right ml-2" @click="onChooseNet('TestNet')">Testnet</b-button>
        <b-button variant="info" class="float-right mx-3" @click="onChooseNet('MainNet')">Mainnet</b-button>
      </div>
    </div>
    <div id="chartdiv"></div>
  </div>
</template>

<script src="https://www.amcharts.com/lib/4/core.js"></script>
<script src="https://www.amcharts.com/lib/4/maps.js"></script>
<script src="https://www.amcharts.com/lib/4/geodata/worldLow.js"></script>
<script src="https://www.amcharts.com/lib/4/themes/animated.js"></script>
<script>
// svg path for target icon
var targetSVG =
  "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

export default {
  name: "Main",
  data() {
    return {
      neoMapLocations: [],
      neoAllNodeLocations: [],
      neoMainNetNodeLocations: [],
      neoTestNetNodeLocations: [],
      neoNodes: [],
      flagTestNet: true,
      flagMainNet: true
    };
  },
  mounted() {
    this.neoMapLocations = this.$store.getters.getNeoNodes;
  },
  methods: {
    onChooseNet(flagNet) {
      if (flagNet === "MainNet") {
        this.neoMapLocations = this.neoMainNetNodeLocations;
      } else if (flagNet == "TestNet") {
        this.neoTestNetNodeLocations = [
          {
            id: "london",
            svgPath: targetSVG,
            title: "London",
            latitude: 51.5002,
            longitude: -0.1262,
            scale: 1
          }
        ];
        this.neoMapLocations = this.neoTestNetNodeLocations;
      }
    },
    showMap(data) {
      // Themes begin
      am4core.useTheme(am4themes_animated);
      // Themes end

      // Define marker path
      var targetSVG =
        "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

      // Create map instance
      var chart = am4core.create("chartdiv", am4maps.MapChart);
      var interfaceColors = new am4core.InterfaceColorSet();

      // Set map definition
      chart.geodata = am4geodata_worldLow;

      // Set projection
      chart.projection = new am4maps.projections.Miller();

      // Add zoom control
      chart.zoomControl = new am4maps.ZoomControl();

      // Set initial zoom
      chart.homeZoomLevel = 1;
      chart.homeGeoPoint = {
        latitude: 30,
        longitude: 0
      };

      // Create map polygon series
      var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
      polygonSeries.exclude = ["AQ"];
      polygonSeries.useGeodata = true;
      polygonSeries.mapPolygons.template.nonScalingStroke = true;

      // Configure series
      var polygonTemplate = polygonSeries.mapPolygons.template;
      polygonTemplate.tooltipText = "{name}";
      polygonTemplate.fill = am4core.color("#74B266");

      // Create hover state and set alternative fill color
      var hs = polygonTemplate.states.create("hover");
      hs.properties.fill = am4core.color("#367B25");

      // Add images
      var imageSeries = chart.series.push(new am4maps.MapImageSeries());
      var imageTemplate = imageSeries.mapImages.template;
      imageTemplate.tooltipText = "{title}";
      imageTemplate.nonScaling = true;

      var marker = imageTemplate.createChild(am4core.Sprite);
      marker.path = targetSVG;
      marker.horizontalCenter = "middle";
      marker.verticalCenter = "middle";
      marker.scale = 0.7;
      marker.fill = interfaceColors.getFor("alternativeBackground");

      imageTemplate.propertyFields.latitude = "latitude";
      imageTemplate.propertyFields.longitude = "longitude";
      imageSeries.data = data;

      // Add lines
      var lineSeries = chart.series.push(new am4maps.MapLineSeries());
      lineSeries.dataFields.multiGeoLine = "multiGeoLine";

      var lineTemplate = lineSeries.mapLines.template;
      lineTemplate.nonScalingStroke = true;
      lineTemplate.arrow.nonScaling = true;
      lineTemplate.arrow.width = 4;
      lineTemplate.arrow.height = 6;
      lineTemplate.stroke = interfaceColors.getFor("alternativeBackground");
      lineTemplate.fill = interfaceColors.getFor("alternativeBackground");
      lineTemplate.line.strokeOpacity = 0.4;
    },
    suckData() {
      let data = this.$store.getters.getNeoNodes;
      if (data.length === 0) return;

      let neoAllNodeLocations = [];
      let neoMainNetNodeLocations = [];
      let neoTestNetNodeLocations = [];
      let element = {};

      data.forEach(item => {
        element = {
          svgPath: targetSVG,
          title: item.location,
          latitude: item.latitude,
          longitude: item.longitude,
          scale: 0.5
        };

        neoAllNodeLocations.push(element);
        if (item.net === "MainNet") {
          neoMainNetNodeLocations.push(element);
        } else if (item.net === "TestNet") {
          neoTestNetNodeLocations.push(element);
        }
      });

      this.neoNodes = data;
      this.neoAllNodeLocations = neoAllNodeLocations;
      this.neoMainNetNodeLocations = neoMainNetNodeLocations;
      this.neoTestNetNodeLocations = neoTestNetNodeLocations;

      //initial map data
      if (
        this.neoMapLocations.length === 0 &&
        neoMainNetNodeLocations.length !== 0
      )
        this.neoMapLocations = neoMainNetNodeLocations;
    }
  },
  computed: {
    refreshNodes() {
      return this.$store.getters.getNeoNodes;
    },
    refreshData() {
      return this.neoMapLocations;
    }
  },
  watch: {
    refreshNodes: function() {
      this.suckData();
    },
    refreshData: function() {
      this.showMap(this.neoMapLocations);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#chartdiv {
  width: 100%;
  height: 75vh;
}
.btn-net {
  float: right;
}
</style>
