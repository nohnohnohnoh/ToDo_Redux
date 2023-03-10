import axios from "axios";
import React, { useState, useEffect } from "react";
import { RootState, AppDispatch } from "../../Store";
import { useDispatch, useSelector } from "react-redux";
import { getByIdPost } from "../../actions/PostAction";
import "./stylesToDoDetail/todoDetailSection.scss";

interface Test {
  id: string;
  content: string;
  title: string;
}

interface ToDoDetailSectionProps {
  type: string;
  onChangeupDateTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeupDateContent: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  id: string | undefined;
}

const ToDoDetailSection = ({
  type,
  onChangeupDateTitle,
  onChangeupDateContent,
  id,
}: ToDoDetailSectionProps) => {
  const dispatch: AppDispatch = useDispatch();
  const deatailPosts: any = useSelector((state: RootState) => state.posts.data);
  useEffect(() => {
    dispatch(getByIdPost(id));
  }, []);
  console.log(deatailPosts);
  return (
    <>
      {type === "todoDetail" && (
        <div className="todoDetailSectionBox">
          {deatailPosts &&
            deatailPosts.map(({ title, content, id }: Test) => (
              <div key={id} className="todoDetailSection">
                <div className="todoDetailTitle">{title}</div>
                <div className="todoDetailConTent">{content}</div>
              </div>
            ))}
        </div>
      )}

      {type === "todoDetailUpdate" && (
        <div className="todoDetailSectionBox">
          <div className="updateInputBox">
            <input
              type="text"
              className="updateTitle"
              onChange={onChangeupDateTitle}
            />
            <textarea
              className="updateContent"
              onChange={onChangeupDateContent}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ToDoDetailSection;
