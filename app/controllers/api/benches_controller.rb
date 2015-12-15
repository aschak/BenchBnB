class Api::BenchesController < ApplicationController

  def index
    @benches = Bench.all.select {
      |bench| Bench.bounded?(params['bounds'], bench)
    }
  end


  def show
    @bench = Bench.find(params[:id])
  end

end
