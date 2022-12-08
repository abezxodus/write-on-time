require "rails_helper"

RSpec.describe Api::V1::AssignmentsController, type: :controller do
  let!(:user1) {User.create(first_name: "John", 
                      last_name: "Smith", 
                      username: "jsm456", 
                      email: "fake@email.com", 
                      password: "FakePassword2727!")}
  let!(:project1) {Project.create(name: "My Novel", 
                      description: "Finally getting around to writing my story.", 
                      user: user1)}
  let!(:assignment1) {Assignment.create(name: "Outline", 
                      due_date: "2023-11-01T00:00:00.000Z", 
                      note: "Figuring out the plot", 
                      project: project1)}

  describe "GET#show" do
    it "should return an individual assignment with all its attributes" do

      login(user1)

      get :show, params: {id: assignment1.id} 
      
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json.length).to eq 14
      expect(returned_json["name"]).to eq assignment1.name
      expect(returned_json["due_date"]).to eq assignment1.due_date.strftime("%Y-%m-%d")
      expect(returned_json["note"]).to eq assignment1.note
      expect(returned_json["project_id"]).to eq project1.id
    end
  end

  describe "POST#create" do
    it "creates a new assignment" do

      login(user1)
      
      post_json = {
        assignment: {
          name: "Chapter 1", 
          due_date: "2023-11-02T00:00:00.000Z", 
          page_count_req: "5", 
          word_count_req: "2500", 
          email_reminder: false, 
          text_reminder: false, 
          project_id: project1.id, 
          open: true, 
          google_calendar: false,
        }
      }

      prev_count = Assignment.count
      post(:create, params: post_json, format: :json)
      expect(Assignment.count).to eq(prev_count + 1)
    end
  end

  describe "GET#edit" do
    it "should return an individual assignment with all its attributes for editing" do

      login(user1)

      get :edit, params: {id: assignment1.id} 
      
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json.length).to eq 14
      expect(returned_json["name"]).to eq assignment1.name
      expect(returned_json["due_date"]).to eq assignment1.due_date.strftime("%Y-%m-%d")
      expect(returned_json["note"]).to eq assignment1.note
      expect(returned_json["project_id"]).to eq project1.id
    end
  end

  describe "PUT#update" do
    it "updates an existing assignment" do

      login(user1)
      
      update_json = {
        id: assignment1,
        assignment: {
          name: "Outline", 
          due_date: "2023-11-02T00:00:00.000Z", 
          page_count_req: "1", 
          word_count_req: "500", 
          email_reminder: false, 
          text_reminder: false, 
          project_id: project1.id, 
          open: true, 
          google_calendar: false,
          id: assignment1.id
        }
      }

      put(:update, params: update_json, format: :json)
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json["name"]).to eq project1.name
    end
  end
end