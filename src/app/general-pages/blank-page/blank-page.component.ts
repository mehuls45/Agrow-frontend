import { HttpClient } from '@angular/common/http';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blank-page',
  templateUrl: './blank-page.component.html',
  styleUrls: ['./blank-page.component.scss']
})
export class BlankPageComponent implements OnInit {

  masterData = [];
  cropList = [];

  showCrop = [
    "Potato",
    "Wheat",
    "Rice",
    "Peanut",
    "Sugarcane"
  ]

  yearPeriod = [
    '2020',
    '2021'
  ]

  uniqueCropList = [];
  filterData = [];
  potatoData2020 = [];
  wheatData2020 = [];
  riceData2020 = [];
  potatoData2021 = [];
  wheatData2021 = [];
  riceData2021 = [];
  peanut2021 = [];
  peanut2020 = [];
  sugarcane2021 = [];
  sugarcane2020 = [];

  transData = [];

  searchForm: FormGroup;
  cropName: FormControl;
  timePeriod: FormControl;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    // ---------------------------------

    this.searchForm = new FormGroup({
      cropName : new FormControl('Potato', Validators.required),
      timePeriod: new FormControl('2020')
    })

    this.getJSON().subscribe(data => {
      console.log("Crop data: " + data.length)

      this.masterData = data;

      for(let i=0; i<1000; ++i) {
        this.cropList.push(this.masterData[i].Crop)
      }

      this.uniqueCropList = [];
      this.uniqueCropList = this.cropList.filter(this.onlyUnique);
       
    // this.submit("Tomato")

    this.showData()
  
    });
  }

  showData() {
    console.log('searchForm: ' + JSON.stringify(this.searchForm.value))

    let cropName = this.searchForm.value.cropName;
    let period = this.searchForm.value.timePeriod;

    this.potatoData2020 = [
      ['madhya pradesh', 16 ],
      ['uttar pradesh', 18],
      ['karnataka', 9],
      ['nagaland', 0],
      ['bihar', 9],
      ['lakshadweep', 0],
      ['andaman and nicobar', 0],
      ['assam', 9],
      ['west bengal', 13],
      ['puducherry', 2],
      ['daman and diu', 5],
      ['gujarat', 10],
      ['rajasthan', 1],
      ['dadara and nagar havelli', 0],
      ['chhattisgarh', 0],
      ['tamil nadu', 0],
      ['chandigarh', 0],
      ['punjab', 9],
      ['haryana', 11],
      ['andhra pradesh', 2],
      ['maharashtra', 3],
      ['himachal pradesh', 2],
      ['meghalaya', 0],
      ['kerala', 4],
      ['telangana', 0],
      ['mizoram', 0],
      ['tripura', 0],
      ['manipur', 0],
      ['arunanchal pradesh', 0],
      ['jharkhand', 10],
      ['goa', 2],
      ['nct of delhi', 0],
      ['odisha', 9],
      ['jammu and kashmir', 0],
      ['sikkim', 0],
      ['uttarakhand', 3]
    ];

    this.wheatData2020 = [
      ['madhya pradesh', 10],
      ['uttar pradesh', 11],
      ['karnataka', 0],
      ['nagaland', 2],
      ['bihar', 8],
      ['lakshadweep', 0],
      ['andaman and nicobar', 0],
      ['assam', 1],
      ['west bengal', 9],
      ['puducherry', 0],
      ['daman and diu', 2],
      ['gujarat', 12],
      ['rajasthan', 14],
      ['dadara and nagar havelli', 0],
      ['chhattisgarh', 1],
      ['tamil nadu', 1],
      ['chandigarh', 1],
      ['punjab', 12],
      ['haryana', 12],
      ['andhra pradesh', 0],
      ['maharashtra', 17],
      ['himachal pradesh', 2],
      ['meghalaya', 0],
      ['kerala', 0],
      ['telangana', 0],
      ['mizoram', 0],
      ['tripura', 0],
      ['manipur', 1],
      ['arunanchal pradesh', 1],
      ['jharkhand', 1],
      ['goa', 0],
      ['nct of delhi', 1],
      ['odisha', 0],
      ['jammu and kashmir', 0],
      ['sikkim', 0],
      ['uttarakhand', 12]
    ];

    this.riceData2020 = [
      ['madhya pradesh', 1 ],
      ['uttar pradesh', 9],
      ['karnataka', 11],
      ['nagaland', 3],
      ['bihar', 11],
      ['lakshadweep', 0],
      ['andaman and nicobar', 0],
      ['assam', 7],
      ['west bengal', 12],
      ['puducherry', 10],
      ['daman and diu', 2],
      ['gujarat', 4],
      ['rajasthan', 1],
      ['dadara and nagar havelli', 0],
      ['chhattisgarh', 8],
      ['tamil nadu', 12],
      ['chandigarh', 9],
      ['punjab', 10],
      ['haryana', 12],
      ['andhra pradesh', 4],
      ['maharashtra', 7],
      ['himachal pradesh', 6],
      ['meghalaya', 8],
      ['kerala', 9],
      ['telangana', 12],
      ['mizoram', 4],
      ['tripura', 8],
      ['manipur', 5],
      ['arunanchal pradesh', 1],
      ['jharkhand', 9],
      ['goa', 12],
      ['nct of delhi', 5],
      ['odisha', 13],
      ['jammu and kashmir', 0],
      ['sikkim', 2],
      ['uttarakhand', 4]
    ];

    this.potatoData2021 = [
      ['madhya pradesh', 15 ],
      ['uttar pradesh', 13],
      ['karnataka', 12],
      ['nagaland', 0],
      ['bihar', 14],
      ['lakshadweep', 0],
      ['andaman and nicobar', 0],
      ['assam', 11],
      ['west bengal', 12],
      ['puducherry', 1],
      ['daman and diu', 5],
      ['gujarat', 10],
      ['rajasthan', 1],
      ['dadara and nagar havelli', 0],
      ['chhattisgarh', 0],
      ['tamil nadu', 0],
      ['chandigarh', 0],
      ['punjab', 9],
      ['haryana', 11],
      ['andhra pradesh', 1],
      ['maharashtra', 1],
      ['himachal pradesh', 1],
      ['meghalaya', 0],
      ['kerala', 1],
      ['telangana', 0],
      ['mizoram', 0],
      ['tripura', 0],
      ['manipur', 0],
      ['arunanchal pradesh', 0],
      ['jharkhand', 10],
      ['goa', 1],
      ['nct of delhi', 0],
      ['odisha', 5],
      ['jammu and kashmir', 0],
      ['sikkim', 0],
      ['uttarakhand', 1]
    ];

    this.wheatData2021 = [
      ['madhya pradesh', 12],
      ['uttar pradesh', 9],
      ['karnataka', 0],
      ['nagaland', 3],
      ['bihar', 14],
      ['lakshadweep', 0],
      ['andaman and nicobar', 0],
      ['assam', 1],
      ['west bengal', 11],
      ['puducherry', 0],
      ['daman and diu', 2],
      ['gujarat', 11],
      ['rajasthan', 12],
      ['dadara and nagar havelli', 0],
      ['chhattisgarh', 1],
      ['tamil nadu', 0],
      ['chandigarh', 0],
      ['punjab', 15],
      ['haryana', 12],
      ['andhra pradesh', 0],
      ['maharashtra', 16],
      ['himachal pradesh', 1],
      ['meghalaya', 0],
      ['kerala', 1],
      ['telangana', 0],
      ['mizoram', 0],
      ['tripura', 1],
      ['manipur', 0],
      ['arunanchal pradesh', 0],
      ['jharkhand', 1],
      ['goa', 1],
      ['nct of delhi', 0],
      ['odisha', 1],
      ['jammu and kashmir', 0],
      ['sikkim', 0],
      ['uttarakhand', 10]
    ];

    this.riceData2021 = [
      ['madhya pradesh', 1 ],
      ['uttar pradesh', 12],
      ['karnataka', 13],
      ['nagaland', 3],
      ['bihar', 14],
      ['lakshadweep', 0],
      ['andaman and nicobar', 0],
      ['assam', 8],
      ['west bengal', 11],
      ['puducherry', 8],
      ['daman and diu', 3],
      ['gujarat', 5],
      ['rajasthan', 0],
      ['dadara and nagar havelli', 0],
      ['chhattisgarh', 9],
      ['tamil nadu', 15],
      ['chandigarh', 10],
      ['punjab', 11],
      ['haryana', 13],
      ['andhra pradesh', 1],
      ['maharashtra', 8],
      ['himachal pradesh', 5],
      ['meghalaya', 4],
      ['kerala', 13],
      ['telangana', 14],
      ['mizoram', 5],
      ['tripura', 8],
      ['manipur', 5],
      ['arunanchal pradesh', 1],
      ['jharkhand', 12],
      ['goa', 11],
      ['nct of delhi', 8],
      ['odisha', 17],
      ['jammu and kashmir', 2],
      ['sikkim', 6],
      ['uttarakhand', 6]
    ];

    this.peanut2020 = [
      ['madhya pradesh', 15 ],
      ['uttar pradesh', 9],
      ['karnataka', 3],
      ['nagaland', 3],
      ['bihar', 1],
      ['lakshadweep', 0],
      ['andaman and nicobar', 0],
      ['assam', 0],
      ['west bengal', 6],
      ['puducherry', 0],
      ['daman and diu', 10],
      ['gujarat', 35],
      ['rajasthan', 23],
      ['dadara and nagar havelli', 0],
      ['chhattisgarh', 8],
      ['tamil nadu', 6],
      ['chandigarh', 1],
      ['punjab', 3],
      ['haryana', 2],
      ['andhra pradesh', 12],
      ['maharashtra', 8],
      ['himachal pradesh', 3],
      ['meghalaya', 0],
      ['kerala', 0],
      ['telangana', 9],
      ['mizoram', 0],
      ['tripura', 0],
      ['manipur', 0],
      ['arunanchal pradesh', 8],
      ['jharkhand', 0],
      ['goa', 3],
      ['nct of delhi', 2],
      ['odisha', 0],
      ['jammu and kashmir', 0],
      ['sikkim', 0],
      ['uttarakhand', 3]
    ]

    this.peanut2021 = [
      ['madhya pradesh', 15 ],
      ['uttar pradesh', 9],
      ['karnataka', 3],
      ['nagaland', 3],
      ['bihar', 1],
      ['lakshadweep', 15],
      ['andaman and nicobar', 6],
      ['assam', 14],
      ['west bengal', 8],
      ['puducherry', 0],
      ['daman and diu', 10],
      ['gujarat', 47],
      ['rajasthan', 33],
      ['dadara and nagar havelli', 0],
      ['chhattisgarh', 8],
      ['tamil nadu', 6],
      ['chandigarh', 2],
      ['punjab', 3],
      ['haryana', 2],
      ['andhra pradesh', 12],
      ['maharashtra', 8],
      ['himachal pradesh', 3],
      ['meghalaya', 0],
      ['kerala', 0],
      ['telangana', 7],
      ['mizoram', 0],
      ['tripura', 0],
      ['manipur', 0],
      ['arunanchal pradesh', 9],
      ['jharkhand', 0],
      ['goa', 1],
      ['nct of delhi', 3],
      ['odisha', 0],
      ['jammu and kashmir', 0],
      ['sikkim', 0],
      ['uttarakhand', 3]
    ]

    this.sugarcane2020 = [
      ['madhya pradesh', 15 ],
      ['uttar pradesh', 14],
      ['karnataka', 9],
      ['nagaland', 0],
      ['bihar', 16],
      ['lakshadweep', 0],
      ['andaman and nicobar', 0],
      ['assam', 0],
      ['west bengal', 1],
      ['puducherry', 0],
      ['daman and diu', 0],
      ['gujarat', 24],
      ['rajasthan', 1],
      ['dadara and nagar havelli', 0],
      ['chhattisgarh', 0],
      ['tamil nadu', 8],
      ['chandigarh', 1],
      ['punjab', 10],
      ['haryana', 12],
      ['andhra pradesh', 13],
      ['maharashtra', 15],
      ['himachal pradesh', 2],
      ['meghalaya', 0],
      ['kerala', 0],
      ['telangana', 9],
      ['mizoram', 0],
      ['tripura', 0],
      ['manipur', 0],
      ['arunanchal pradesh', 1],
      ['jharkhand', 0],
      ['goa', 0],
      ['nct of delhi', 9],
      ['odisha', 10],
      ['jammu and kashmir', 0],
      ['sikkim', 0],
      ['uttarakhand', 5]
    ]

    this.sugarcane2021 = [
      ['madhya pradesh', 18 ],
      ['uttar pradesh', 20],
      ['karnataka', 12],
      ['nagaland', 0],
      ['bihar', 16],
      ['lakshadweep', 0],
      ['andaman and nicobar', 0],
      ['assam', 0],
      ['west bengal', 1],
      ['puducherry', 0],
      ['daman and diu', 0],
      ['gujarat', 12],
      ['rajasthan', 1],
      ['dadara and nagar havelli', 1],
      ['chhattisgarh', 0],
      ['tamil nadu', 12],
      ['chandigarh', 1],
      ['punjab', 6],
      ['haryana', 18],
      ['andhra pradesh', 18],
      ['maharashtra', 23],
      ['himachal pradesh', 2],
      ['meghalaya', 0],
      ['kerala', 0],
      ['telangana', 12],
      ['mizoram', 0],
      ['tripura', 0],
      ['manipur', 0],
      ['arunanchal pradesh', 1],
      ['jharkhand', 0],
      ['goa', 0],
      ['nct of delhi', 9],
      ['odisha', 8],
      ['jammu and kashmir', 0],
      ['sikkim', 0],
      ['uttarakhand', 9]
    ]




    let data = [];

    if(cropName == 'Potato' && period == '2021') {
      data = this.potatoData2021;
    }
    else if(cropName == 'Wheat' && period == '2021') {
      data = this.wheatData2021;
    } 
    else if(cropName == 'Rice' && period == '2021') {
      data = this.riceData2021;
    }
    else if(cropName == 'Potato' && period == '2020') {
      data = this.potatoData2020;
    }
    else if(cropName == 'Wheat' && period == '2020') {
      data = this.wheatData2020;
    } 
    else if(cropName == 'Rice' && period == '2020') {
      data = this.riceData2020;
    }
    else if(cropName == 'Peanut' && period == '2020') {
      data = this.peanut2020;
    }
    else if(cropName == 'Peanut' && period == '2021') {
      data = this.peanut2021;
    }
    else if(cropName == 'Sugarcane' && period == '2020') {
      data = this.sugarcane2020;
    }
    else if(cropName == 'Sugarcane' && period == '2021') {
      data = this.sugarcane2021;
    }
    

    Highcharts.mapChart('container', {
      chart: {
          map: 'countries/in/custom/in-all-disputed'
      },
  
      title: {
          text: 'Yearly Crop Yield [In thousand tons] '
      },
  
      mapNavigation: {
          enabled: true,
          buttonOptions: {
              verticalAlign: 'bottom'
          }
      },
  
      colorAxis: {
          min: 0
      },
  
      series: [{
          data: data,
          name: cropName,
          states: {
              hover: {
                  color: '#BADA55'
              }
          },
          dataLabels: {
              enabled: true,
              format: '{point.name}'
          }
      }]
  });

  }

  submit(cropName) {

    let stateFound:boolean=false;
    let yearFound:boolean=false;

    this.transData = [];

    console.log('In submit')

    //console.log('Master data: ' + this.masterData)

    this.filterData = this.masterData.filter(obj => {
      return (obj.Crop === cropName);
    })

    console.log('Filter Data: ' + this.filterData.length + ' ' + JSON.stringify(this.filterData))

    for(let i=0; i<15; ++i) {

      if(this.filterData[i]) {

        let year = this.filterData[i].Year;
        let state = this.filterData[i].State;
        let produce = this.filterData[i].Production;
        console.log("Transformed data: " + this.transData.length + " " + JSON.stringify(this.transData) )

        // console.log('Filter obj' + JSON.stringify(this.filterData[i]) )

        console.log(year + ' ' + state + ' ' + produce)
  
        if(this.transData.length < 1) {

          let obj = {
            "year": year,
            "data" : [
              {
                "state": state,
                "produce": parseInt(produce)
              }
            ]
          }

          this.transData.push(obj)

          //console.log('Transformed Data: ' + JSON.stringify(this.transData) )
          continue;

        } else {

          for(let j=0; j<this.transData.length; ++j) {

            yearFound = false;
            // console.log(this.transData[j].year === year)
            console.log(this.transData[j].year + "  "+ year)
            if(this.transData[j].year === year) {

              console.log('Year found')
              
              yearFound = true;
              for(let k=0; k<this.transData[j]['data'].length; ++k ) {
                
                stateFound = false;
                if(this.transData[j]['data'][k]['state'] === state ) {
                  
                  this.transData[j]['data'][k]['produce'] = parseInt(this.transData[j]['data'][k]['produce']) + parseInt(produce);
                  stateFound = true;
                  break;
                } 
              }

              if(!stateFound) {
                this.transData[j]['data'].push ({
                  "state": state,
                  "produce": parseInt(produce)
                })
              }

              continue;

            } 

          }
          if(!yearFound) {
            let obj = {
              "year": year,
              "data" : [
                {
                  "state": state,
                  "produce": parseInt(produce)
                }
              ]
            }
            this.transData.push(obj)
          }

          continue;

        }

      }
    }

    // console.log('Filter Data: ' + JSON.stringify(this.filterData) )
    // console.log('Trans Data: ' + JSON.stringify(this.transData) )

  }

  getJSON(): Observable<any> {
    return this.http.get("./assets/crop_data.json")
  }  

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
 

}
