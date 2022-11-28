# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_11_23_154230) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "assignments", force: :cascade do |t|
    t.string "name", null: false
    t.string "note"
    t.string "page_count_req", default: "0"
    t.string "word_count_req", default: "0"
    t.boolean "email_reminder", default: false
    t.boolean "text_reminder", default: false
    t.boolean "open", default: true, null: false
    t.boolean "past_due", default: false, null: false
    t.bigint "project_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.date "due_date", default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.boolean "google_calendar", default: false, null: false
    t.index ["project_id"], name: "index_assignments_on_project_id"
  end

  create_table "projects", force: :cascade do |t|
    t.string "name", null: false
    t.string "description"
    t.boolean "open", default: true, null: false
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_projects_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", default: "", null: false
    t.string "last_name", default: "", null: false
    t.string "username", default: "", null: false
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "phone_number"
    t.string "default_picture", default: "https://write-on-time.s3.amazonaws.com/logos/penIcon.png", null: false
    t.string "profile_picture"
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "streak_count", default: 0, null: false
    t.integer "total_projects", default: 0, null: false
    t.integer "total_assignments", default: 0, null: false
    t.integer "total_on_time", default: 0, null: false
    t.integer "total_late", default: 0, null: false
    t.integer "word_count", default: 0, null: false
    t.integer "page_count", default: 0, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
