'use client'
import React, { useState } from 'react'
import { Comment } from '../interfaces/comment.interface'
import { signIn } from 'next-auth/react'
import { SessionUser } from '../interfaces/user.interface'

type Props = {
  comment: Comment,
  user: SessionUser
}

const Comment = ({comment, user}: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const toggleReplying = () => {
    if (!user) {
      return signIn();
    }
    setIsReplying(!isReplying);
  }

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  }
  return (
    <article
      className="shadow-md relative block overflow-hidden rounded-lg border bg-white dark:bg-transparent border-gray-200 p-4 sm:p-6 lg:p-8"
    >
      <span
        className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
      ></span>

      <div className="sm:flex sm:justify-between sm:gap-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white sm:text-xl">
            {comment.user.name}
          </h3>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-500 dark:text-gray-300">
          {comment.text}
        </p>
      </div>

      <dl className="mt-6 flex justify-end gap-4 sm:gap-6">
        <button
          onClick={toggleReplying}
          className="inline-block rounded border border-current px-4 py-1 text-sm font-medium text-indigo-600 dark:text-indigo-300 transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:text-indigo-500"
        >
          Reply
        </button>

        <button>
          12 Likes
        </button>
        <button onClick={toggleExpanded} className={`duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
      </dl>
      {/* <section className="my-4" *ngIf="isReplying()">
        <app-comment-form (formSubmitted)="createComment($event)" placeholder="Write your reply" buttonText="Send"></app-comment-form>
      </section>
      <section className="nested-comments" *ngIf="isExpanded()">
        <app-comment [comment]="nestedComment" *ngFor="let nestedComment of nestedComments(); trackBy: commentTrackBy"></app-comment>
      </section> */}
    </article>
  )
}

export default Comment