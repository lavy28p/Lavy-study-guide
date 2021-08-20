class QuestionsController < ApplicationController
  # before_action :set_list, only: [:show, :update, :destroy, :add_list]
  # before_action :authorize_request, only: [ :show, :create, :update, :index, :destroy]
  
  # GET /questions
  def index
    @questions = Question.all
    render json: @questions, include: :user
  end

  # GET /questions/id
  def show
    @question = Question.find(params[:id])
    render json: @question, include: {answers:{include: :user}}
  end

 # POST /questions

 def create
  question = Question.new(question_params)
  if question.save
    render json: question, status: :created
  else
    render json: question.errors, status: :unprocessable_entity
  end
end

# PATCH/PUT /question/id
  def update
    if @question.update(question_params)
      render json: @question, status: :ok
    else
      render json: @question.errors, status: :unprocessable_entity
    end
  end

# DELETE /question/id
def destroy
  @question.destroy
end

private

  def question_params
    params.require(:question).permit(:post, :user_id)
  end

end
