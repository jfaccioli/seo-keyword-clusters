		var massPopChart = new Chart(myChart, {
			type: 'radar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
			data:{
				labels: ['Centric Diatom', 'Ciliate', 'Coccolithopore', 'Cyanobacteria', 'Diatom', 'Dinoglagellate', 'Flagellate', 'Foraminifera', 'Other', 'Pennate Diatom', 'Protozoa', 'Radiozoa', 'Sillicoflagellate'],
				datasets: [{
					label:'Taxonomy Group',
					data:[
						170838752,
						20795017,
						1707615,
						6690400,
						13333,
						31484735,
                        1077399,
                        1088449,
                        15419912,
                        167181549,
                        666,
                        2072097,
                        18192375
					],
					// backgroundColor:['red', 'orange', 'yellow', 'green', 'blue', 'purple'],
					borderWidth: 1,
					borderColor: 'grey',
					hoverBorderWidth: 2,
					hoverBorderColor: 'black'
				}]
			},
			options:{
				title:{
					display:true,
					text:'Phytoplankton Volume Per Family Group',
					fontSize:25
				},
				legend:{
					position:'right'
				}
			}
		});


