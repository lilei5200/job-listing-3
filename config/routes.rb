Rails.application.routes.draw do
  devise_for :users
  root 'topics#index'


   namespace :admin do
     resources :jobs do
         resources :resumes
       member  do
         post :publish
         post :hide
       end
     end
   end
resources :jobs do
  resources :resumes
end
 end
