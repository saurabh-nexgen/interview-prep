import User from "../models/User";
import Subscription from "../models/Subscription";
import Music from "../models/Music";
import asyncHandler from "../middleware/async";
import { Request, Response, NextFunction } from "express";
import { ProtectedRequest} from "../Types";
import ErrorResponse from "../utils/errorResponse";

const dashboardData=asyncHandler(async(req:ProtectedRequest,res:Response,next:NextFunction) => {
   let [totalUser,SubscribedUser,eachPlanUser,totalMusic,lastUpdatedMusic]=Promise.all(
       await totalUser(),await SubscribedUser(),await eachPlanUser(),await totalMusic(),
       await lastUpdateMusic()
   )
   res.status.json({
       message:"success",
       data:{
           totalUser,
           subscribedUser,
           'nonSubscribedUser':totalUser-SubscribedUser,
           totalMusic,
           lastUpdatedMusic
       }
   })
})
async function totalUser(){
    return User.count()
}
async function SubscribedUser(){
    return User.find({isSubscribed:true}).count()
}
async function eachPlanUser(){
    return Subscription.aggregate([{
        $group:{
            $id:'$planId',
            $users:{
                $sum:1
            }
        }
    }])
}

async function totalMusic(){
    return Music.count()
}
async function lastUpdatedMusic(){
    return Music.find().limit(1).sort('-createdAt')
}


