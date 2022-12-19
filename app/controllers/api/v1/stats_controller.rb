class Api::V1::StatsController < ApiController
  
  def index
    stats = current_user.stat
    #badges = stats.badges
    stats_package = [{stats: stats}, 
                    stats.timelines
                    #badges: badges
                    ]
    render json: stats_package
  end
end