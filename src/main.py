import telebot
from telebot import types
import os

bot = telebot.TeleBot(os.getenv("TOKEN"))


@bot.message_handler(commands=['start', 'help'])
def send_welcome(message):
    bot.send_message(message.chat.id, "Howdy, how are you doing?")


@bot.message_handler(func=lambda message: True)
def echo_all(message):
    print(message)
    # bot.send_message(message.chat.id, message.text)
    markup = types.ReplyKeyboardMarkup(row_width=3)
    itembtn1 = types.WebAppInfo('https://sergeysablin99.github.io/ultimatecalendar/')
    bnt1 = types.KeyboardButton("twa", web_app=itembtn1)
    markup.add(bnt1)
    bot.send_message(message.chat.id, "Choose one letter:", reply_markup=markup)


@bot.edited_message_handler(func=lambda message: True)
def send_edited(message):
    bot.send_message(message.chat.id, "edited, gotcha!")


bot.infinity_polling()
