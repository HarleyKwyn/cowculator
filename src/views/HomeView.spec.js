import React                  from 'react';
import TestUtils              from 'react-addons-test-utils';
import { bindActionCreators } from 'redux';
import { HomeView }            from './HomeView';

function shallowRender (component) {
  const renderer = TestUtils.createRenderer();

  renderer.render(component);
  return renderer.getRenderOutput();
}

function renderWithProps (props = {}) {
  return TestUtils.renderIntoDocument(<HomeView {...props} />);
}

function shallowRenderWithProps (props = {}) {
  return shallowRender(<HomeView {...props} />)
}

describe('(View) Home', function () {
  let component, rendered, _props, _spies;

  beforeEach(function () {
    _spies = {};
    _props = {
      actions : bindActionCreators({
        editCostToKeep : (_spies.editCostToKeep = sinon.spy()),
        updateSaleWeight : (_spies.updateSaleWeight = sinon.spy()),
        updateBuyWeight : (_spies.updateBuyWeight = sinon.spy()),
        updateSaleUnitValue : (_spies.updateSaleUnitValue = sinon.spy()),
        updateBuyUnitValue : (_spies.updateBuyUnitValue = sinon.spy()),
      }, _spies.dispatch = sinon.spy())
    };

    component = shallowRenderWithProps(_props);
    rendered  = renderWithProps(_props);
  });

  it('Should render as a <div>.', function () {
    expect(component.type).to.equal('div');
  });

  it('Should include an <h3> with title "Cowculator"', function () {
    const h3 = TestUtils.findRenderedDOMComponentWithTag(rendered, 'h3');

    expect(h3).to.exist;
    expect(h3.textContent).to.match(/Cowculator/);
  });

  it('Should render props.profit value as currency string in <h4>', function () {
    const h4 = TestUtils.findRenderedDOMComponentWithTag(
      renderWithProps({ ..._props, profit : 1000 }), 'h4'
    );

    expect(h4).to.exist;
    expect(h4.textContent).to.match(/Profit: \$10.00\/ lb/);
  });

  it('Should apply alert alert-danger css class if props.profit < 0', function () {
    const h4 = TestUtils.findRenderedDOMComponentWithTag(
      renderWithProps({ ..._props, profit : -1000 }), 'h4'
    );

    expect(h4).to.exist;
    expect(h4.className).to.match(/alert alert-danger/);
  });
  it('Should apply alert alert-default css class if props.profit === 0', function () {
    const h4 = TestUtils.findRenderedDOMComponentWithTag(
      renderWithProps({ ..._props, profit : 0 }), 'h4'
    );

    expect(h4).to.exist;
    expect(h4.className).to.match(/alert alert-default/);
  });
  it('Should apply alert alert-success css class if props.profit > 0', function () {
    const h4 = TestUtils.findRenderedDOMComponentWithTag(
      renderWithProps({ ..._props, profit : 1000 }), 'h4'
    );

    expect(h4).to.exist;
    expect(h4.className).to.match(/alert alert-success/);
  });
  // it('Should render five CurrencyInput components', function(){
  //
  // });

  // Need this later for currencyInput test
  // it('Should dispatch an action when "Increment" button is clicked.', function () {
  //   const btn = TestUtils.findRenderedDOMComponentWithTag(rendered, 'button');
  //
  //   _spies.dispatch.should.have.not.been.called;
  //   TestUtils.Simulate.click(btn);
  //   _spies.dispatch.should.have.been.called;
  // });
});
