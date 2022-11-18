class Api::V1::ArtsController < ApiController

  def index
    results = []
    i = 0

    while(results.length < 5)
      random_object = rand(84653)
      url = "https://collectionapi.metmuseum.org/public/collection/v1/objects/#{random_object}"
      api_response = Faraday.get(url)
      parsed_response = JSON.parse(api_response.body)
      if(parsed_response["primaryImage"] != "" && parsed_response.length == 57)
        i += 1
        results.push({id: i, work: parsed_response})
      end
    end
    render json: results
  end

end

# philosophy
# random_object = rand(17)
# url = "https://philosophyapi.pythonanywhere.com/api/ideas/?page=#{random_object}"

# random fact
# conn = Faraday.new(
#   url: "https://api.api-ninjas.com/v1/facts?limit=1",
#   headers: {'X-Api-Key': ENV['API_NINJA_API_KEY']}
#   )
# api_response = conn.get
# parsed_response = JSON.parse(api_response.body)