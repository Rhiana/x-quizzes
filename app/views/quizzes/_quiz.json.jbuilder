json.extract! quiz, :id, :name, :score, :created_at, :updated_at
json.url quiz_url(quiz, format: :json)
