Rails.application.routes.draw do
  resources :quizzes, only: %i[index show]

  root "quizzes#index"
end
