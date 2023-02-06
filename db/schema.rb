# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_02_03_053053) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.bigint "moment_id", null: false
    t.text "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "person_id"
    t.index ["moment_id"], name: "index_comments_on_moment_id"
    t.index ["person_id"], name: "index_comments_on_person_id"
  end

  create_table "favorites", force: :cascade do |t|
    t.bigint "people_id", null: false
    t.string "sports"
    t.string "artists"
    t.string "activities"
    t.string "subjects"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["people_id"], name: "index_favorites_on_people_id"
  end

  create_table "kid_dads", force: :cascade do |t|
    t.bigint "dad_id", null: false
    t.bigint "kid_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["dad_id"], name: "index_kid_dads_on_dad_id"
    t.index ["kid_id"], name: "index_kid_dads_on_kid_id"
  end

  create_table "moments", force: :cascade do |t|
    t.bigint "dad_id", null: false
    t.text "content"
    t.string "image_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["dad_id"], name: "index_moments_on_dad_id"
  end

  create_table "people", force: :cascade do |t|
    t.string "name"
    t.string "nickname"
    t.date "date_of_birth"
    t.string "email"
    t.integer "zipcode"
    t.string "spouse"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "password_digest"
  end

  create_table "person_moments", force: :cascade do |t|
    t.bigint "person_id"
    t.bigint "moment_id"
    t.index ["moment_id"], name: "index_person_moments_on_moment_id"
    t.index ["person_id"], name: "index_person_moments_on_person_id"
  end

  create_table "pets", force: :cascade do |t|
    t.bigint "person_id", null: false
    t.string "name"
    t.string "animal"
    t.string "image_url"
    t.date "date_of_birth"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["person_id"], name: "index_pets_on_person_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.bigint "reviewer_id"
    t.bigint "reviewed_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "content"
    t.index ["reviewed_id"], name: "index_reviews_on_reviewed_id"
    t.index ["reviewer_id"], name: "index_reviews_on_reviewer_id"
  end

  add_foreign_key "comments", "moments"
  add_foreign_key "comments", "people"
  add_foreign_key "favorites", "people", column: "people_id"
  add_foreign_key "kid_dads", "people", column: "dad_id"
  add_foreign_key "kid_dads", "people", column: "kid_id"
  add_foreign_key "moments", "people", column: "dad_id"
  add_foreign_key "person_moments", "moments"
  add_foreign_key "person_moments", "people"
  add_foreign_key "pets", "people"
  add_foreign_key "reviews", "people", column: "reviewed_id"
  add_foreign_key "reviews", "people", column: "reviewer_id"
end
