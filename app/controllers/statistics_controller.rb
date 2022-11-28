class StatisticsController < ApplicationController
  def index
    @stats = current_user.statistics[0]
  end
end