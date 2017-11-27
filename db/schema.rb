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

ActiveRecord::Schema.define(version: 20171122001957) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "channels", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "pic_url", default: "https://thenib.imgix.net/usq/1d97429f-4a64-4d52-bfdb-c36172c05228/this-is-not-fine-001-dae9d5.png", null: false
    t.index ["name"], name: "index_channels_on_name", unique: true
  end

  create_table "follows", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "follower_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["follower_id"], name: "index_follows_on_follower_id"
    t.index ["user_id"], name: "index_follows_on_user_id"
  end

  create_table "ircs", force: :cascade do |t|
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_ircs_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "stream_title"
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.integer "channel_id"
    t.string "stream_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "profile_picture", default: "https://thenib.imgix.net/usq/1d97429f-4a64-4d52-bfdb-c36172c05228/this-is-not-fine-001-dae9d5.png", null: false
    t.index ["channel_id"], name: "index_users_on_channel_id"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
