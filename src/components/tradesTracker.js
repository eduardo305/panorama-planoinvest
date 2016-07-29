import React, { Component } from 'react';

class TradesTracker extends Component {

  componentDidMount() {
    $(function () {
      $('#example2').DataTable({
        "paging": true,
        "lengthChange": false,
        "searching": false,
        "ordering": false,
        "info": true,
        "autoWidth": false
      });
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <div className="box scrollable">
            <div className="box-header">
              <h3 className="box-title">Finalizados</h3>
            </div>
            {/* /.box-header */}
            <div className="box-body">
              <table id="example2" className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>Empresa</th>
                    <th>Ação</th>
                    <th>Compra</th>
                    <th>Preço</th>
                    <th>Stop Loss</th>
                    <th>Objetivo</th>
                    <th>Venda</th>
                    <th>Preço</th>
                    <th>Resultado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Telefônica Vivo</td>
                    <td>VIVT4</td>
                    <td>27/jul</td>
                    <td>R$ 47,55</td>
                    <td>R$ 45,90</td>
                    <td>R$ 49,00</td>
                    <td>28/jul</td>
                    <td>R$ 49,00</td>
                    <td>+3,05%</td>
                  </tr>
                  <tr>
                    <td>Frigorífico Minerva</td>
                    <td>BEEF3</td>
                    <td>26/jul</td>
                    <td>R$ 9,40</td>
                    <td>R$ 9,10</td>
                    <td>R$ 9,80</td>
                    <td>27/jul</td>
                    <td>R$ 9,60</td>
                    <td>+2,13%</td>
                  </tr>
                  <tr>
                  <td>Telefônica Vivo</td>
                  <td>VIVT4</td>
                  <td>22/jul</td>
                  <td>R$ 47,07</td>
                  <td>R$ 45,90</td>
                  <td>R$ 48,87</td>
                  <td>22/jul</td>
                  <td>R$ 47,60</td>
                  <td>+1,13%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* /.box-body */}
          </div>
          {/* /.box */}


        </div>
      </div>

    );
  }
}

export default TradesTracker;
