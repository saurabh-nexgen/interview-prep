import User from "../models/User";
import Subscription from "../models/Subscription";
import Music from "../models/Music";
import asyncHandler from "../middleware/async";
import { Request, Response, NextFunction } from "express";
import { ProtectedRequest} from "../Types";
import ErrorResponse from "../utils/errorResponse";

async function TotalUser(){
    return User.count()
}
async function SubscribedUser(){
    return User.find({isSubscribed:true}).count()
}
async function EachPlanUser(){
    return Subscription.aggregate([
        {
        $group:{
            $id:'$planId',
            $users:{
                $sum:1
            }
        }
    }
        ]);
}

async function TotalMusic(){
    return Music.count()
}
async function LastUpdatedMusic(){
    return Music.find().limit(1).sort('-createdAt')
}
const dashboardData=asyncHandler(async(req:ProtectedRequest,res:Response,next:NextFunction) => {
   let [totalUser,subscribedUser,eachPlanUser,totalMusic,lastUpdatedMusic] =await Promise.all([TotalUser(),SubscribedUser(),EachPlanUser(),TotalMusic(),LastUpdatedMusic()]
   )
   
   res.status(200).json({
       message:"success",
       data:{
           totalUser,
           subscribedUser,
           'nonSubscribedUser':totalUser-subscribedUser,
           totalMusic,
           lastUpdatedMusic
       }
   })
})



