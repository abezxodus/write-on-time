require "rails_helper"

RSpec.describe Api::V1::ProjectsController, type: :controller do
  let!(:user1) {User.create(first_name: "John", 
                      last_name: "Smith", 
                      username: "jsm456", 
                      email: "fake@email.com", 
                      password: "FakePassword2727!")}
  let!(:project1) {Project.create(name: "My Novel", 
                      description: "Finally getting around to writing my story.", 
                      user: user1)}

  describe "GET#show" do
    it "should return an individual project with all its attributes" do

      login(user1)

      get :show, params: {id: project1.id} 
      
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json.length).to eq 2
      expect(returned_json["project"]["name"]).to eq project1.name
      expect(returned_json["project"]["description"]).to eq project1.description
    end
  end

  describe "POST#create" do
    it "creates a new project" do

      login(user1)
      
      post_json = {
        project: {
          name: "My Next Novel", 
          description: "Not a sequel", 
        }
      }

      prev_count = Project.count
      post(:create, params: post_json, format: :json)
      expect(Project.count).to eq(prev_count + 1)
    end
  end

  describe "GET#edit" do
    it "should return an individual project with all its attributes for editing" do

      login(user1)

      get :edit, params: {id: project1.id} 
      
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json.length).to eq 8
      expect(returned_json["name"]).to eq project1.name
      expect(returned_json["description"]).to eq project1.description
    end
  end

  describe "PUT#update" do
    it "updates an existing project" do

      login(user1)
      
      update_json = {
        id: project1.id,
        project: {
          name: "My Novel", 
          description: "Finally getting around to writing my FULL story.", 
        }
      }

      put(:update, params: update_json, format: :json)
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json["description"]).to eq "Finally getting around to writing my FULL story."
    end
  end
end