Rails.application.routes.draw do
  devise_for :users
  root 'welcome#index'


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
  collection do
     get :search
end
 end


end
