class Quiz < ApplicationRecord

  def self.quizzes_list
    quizzes_file = File.read('db/seeds/quizzes.json')
    JSON.parse(quizzes_file)
  end

end
