class Api::V1::ArtController < ApiController

  def index
    results = []
    
    while(results.length < 5)
      random_object = rand(84653)
      url = "https://collectionapi.metmuseum.org/public/collection/v1/objects/#{random_object}"
      api_response = Faraday.get(url)
      parsed_response = JSON.parse(api_response.body)
      if(parsed_response["primaryImage"] != "" && parsed_response.length == 57)
        results.push(parsed_response)
      end
    end
  
    render json: results
  end

end