class AnswersController < ApplicationController
  #before_action :authorize_request, only: [:create, :index ]
  # GET /answers
  def index
    @answers = Answer.all

    render json: @answers
  end

  # POST /answers
  def create

    @question = Question.find(params[:question_id])
    @answer = Answer.where(question_id: @question.id).new(answer_params)
    @answer.user = @answer_user

    if @answer.save
      render json: @answer, status: :created
    else
      render json: @answer.errors, status: :unprocessable_entity
    end
    
  end

  def answer_params
    params.require(:answer).permit(:comment, :question_id, :user_id)
  end

end
