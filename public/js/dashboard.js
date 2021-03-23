var today = new Date();
var currentmonth = today.getMonth() + 1;
function dash(idcommerce){
    $('.loader').show();
    var url = "/datos?idcommerce="+idcommerce;
    axios.get(url).then((res)=>{
        if (!res.data.err){
            $('.loader').hide();
            var resp = res.data.res;
            console.log(res);
            ///Nuevos usuarios
            $("#linechart").sparkline(resp, {
                type: 'line',
                width: '100',
                height: '38',
                lineColor: '#06d79c',
                fillColor: '#ffffff',
                lineWidth: 2,
                minSpotColor: '#0fc491',
                maxSpotColor: '#0fc491',
            });
            $('#totalusers').text(res.data.totalusers);
            //ventas promedio
            $("#barchart").sparkline(res.data.ventasmes, {
                type: 'bar',
                height: '38',
                barWidth: 6,
                barSpacing: 4,
                barColor: '#ffb22b',
            });
            var v =Math.trunc(res.data.ventprom/currentmonth)
            var ventp = v.toLocaleString(
                undefined // leave undefined to use the browser's locale,
                // or use a string like 'en-US' to override it.
            );
            $('#ventprom').text('$ '+ventp);
            //top productos
            $('#toptable').html('')
            var t =res.data.topventas.sort(function(a, b){
                return b.qty - a.qty;
            });
            $('#toptable').append(
                `  <tr>
                      <th style="width: 10px">#</th>
                      <th>Producto</th>
                      <th style="width: 40px">Cantidad</th>
                    </tr>`
            )
            for (let i=0;i<10;i++){
                if(t[i] != null){
                    $('#toptable').append(
                        `<tr>
                      <td>${i+1}.</td>
                      <td>${t[i].name}</td>
                      <td class="text-right"><span class="badge bg-yellow">${t[i].qty}</span></td>
                    </tr>`
                    )
                }

            }
            //top categorias
            $('#topcat').html('')
            $('#topcatinfo').html('');
            var tc =res.data.topcategories.sort(function(a, b){
                return b.tv - a.tv;
            });
            var vec = '';
            for (let i=0;i<6;i++){
                if (tc[i] != null){
                    var v =tc[i].tv;
                    var value = v.toLocaleString(
                        undefined // leave undefined to use the browser's locale,
                        // or use a string like 'en-US' to override it.
                    );
                    vec = vec+tc[i].tv+',';
                    $('#topcatinfo').append(
                        `    <li class="flexbox ">
                    <div>
                      <span class="badge badge-dot badge-lg mr-1" style="background-color: #fc4b6c"></span>
                      <span>${tc[i].name}</span>
                    </div>
                    <div>$ ${value}</div>
                  </li>`
                    )
                }

            }
            var editvec = vec.slice(0, -1)
            console.log(editvec)
            $('#topcat').append(
                editvec
            )
            $(".bar").peity("bar");
            //ventas ultimos 3 meses
            $('#lastmonthinfo').html('')
            $('#lastmonth').html('')
            var v = '';
            var m = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
            var arrayv = res.data.ventasmes;
            var datagrf = [];
            for(let i = 1;i<12;i++){
                let elem ={
                    y: m[i-1],
                    item1:arrayv[i-1]
                }
                var v =arrayv[i-1];
                var value = v.toLocaleString(
                    undefined // leave undefined to use the browser's locale,
                    // or use a string like 'en-US' to override it.
                );
                datagrf.push(elem);
                if (i == currentmonth-2){
                    $('#lastmonthinfo').append(
                        `<li class="br-1">
                    <div class="font-size-20 text-primary">$ ${value}</div>
                    <small>${m[i-1]}</small>
                  </li>`
                    );
                    v=v+arrayv[i-1]+',';
                }else if (i == currentmonth-1){
                    $('#lastmonthinfo').append(
                        `<li class="br-1">
                    <div class="font-size-20 text-primary">$ ${value}</div>
                    <small>${m[i-1]}</small>
                  </li>`
                    );
                    v=v+arrayv[i-1]+',';

                }else if(i == currentmonth){
                    $('#lastmonthinfo').append(
                        `<li>
                    <div class="font-size-20 text-primary">$ ${value}</div>
                    <small>${m[i-1]}</small>
                  </li>`
                    );
                    v=v+arrayv[i-1]+',';
                }
            }
            var editv = v.slice(0, -1)
            $('#lastmonth').append(editv);
            $('.donut').peity('donut');
            // grafico ventas
            console.log(datagrf)
            var line = new Morris.Line({
                element: 'line-chart',
                resize: true,
                data: datagrf,
                xkey: 'y',
                parseTime: false,
                ykeys: ['item1'],
                labels: ['Ventas'],
                lineWidth:2,
                pointFillColors: ['rgba(30,136,229,1)'],
                lineColors: ['rgba(30,136,229,1)'],
                hideHover: 'auto',
            });

        }
    })
}
$(document).ready(function () {
if ($('#commerceid').val() != null){
    dash($('#commerceid').val());
}else{
    dash($('#CommerceSelect').val());
}


    $('#CommerceSelect').on('change',function () {
        dash($('#CommerceSelect').val());
    })


    // $("#barchart").sparkline([1,4,3,7,6,4,8,9,6,8,12], {
    //     type: 'bar',
    //     height: '38',
    //     barWidth: 6,
    //     barSpacing: 4,
    //     barColor: '#ffb22b',
    // });
    // $("#discretechart").sparkline([1,4,3,7,6,4,8,9,6,8,12], {
    //     type: 'discrete',
    //     width: '50',
    //     height: '38',
    //     lineColor: '#745af2',
    // });
    //
    // $("#linearea").sparkline([1,3,5,4,6,8,7,9,7,8,10,16,14,10], {
    //     type: 'line',
    //     width: '100%',
    //     height: '80',
    //     lineColor: '#06d79c',
    //     fillColor: '#06d79c',
    //     lineWidth: 2,
    // });
    //
    // $("#baralc").sparkline([2,4,3,7,6,4,8,9,6,8,12,6,7,9,4,8,5,7,9,13,10,9,9,8], {
    //     type: 'bar',
    //     height: '80',
    //     barWidth: 6,
    //     barSpacing: 4,
    //     barColor: '#ffb22b',
    // });
    //
    $("#lineIncrease").sparkline([1,8,6,5,6,8,7,9,7,8,10,16,14,10], {
        type: 'line',
        width: '100%',
        height: '140',
        lineWidth: 2,
        lineColor: '#ffffff',
        fillColor: "#398bf7",
        spotColor: '#ffffff',
        minSpotColor: '#ffffff',
        maxSpotColor: '#ffffff',
        spotRadius: 3,
    });
    //
    // $("#lineToday").sparkline([1,4,3,7,6,4,8,9,6,8,12], {
    //     type: 'line',
    //     width: '100%',
    //     height: '70',
    //     lineColor: '#ffffff',
    //     fillColor: '#398bf7',
    //     lineWidth: 2,
    //     spotRadius: 3,
    // });
    //
    // $("#baranl").sparkline([1,4,3,7,6,4,8,9,6,8,12,6,7,9,4,8,5,7,9,13,10,9,9,8], {
    //     type: 'bar',
    //     height: '70',
    //     barColor: '#fc4b6c',
    //     barWidth: 7,
    //     barSpacing: 5,
    // });
    //
    // $("#lineTo").sparkline([1,4,3,7,6,4,8,9,6,8,12], {
    //     type: 'line',
    //     width: '100%',
    //     height: '70',
    //     lineColor: '#ffffff',
    //     fillColor: '#398bf7',
    //     lineWidth: 3,
    //     spotColor: '#ffffff',
    //     highlightSpotColor: '#ffffff',
    //     highlightLineColor: '#ffffff',
    //     spotRadius: 3,
    // });

    // donut chart


    // bar chart





    // $('.easypie').easyPieChart({
    //     easing: 'easeOutBounce',
    //     onStep: function(from, to, percent) {
    //         $(this.el).find('.percent').text(Math.round(percent));
    //     }
    // });
    // var chart = window.chart = $('.easypie').data('easyPieChart');
    // $('.js_update').on('click', function() {
    //     chart.update(Math.random()*200-100);
    // });
})


// easypie chart

