import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

const TeamSingle = (props) => {

    let arrmm = [];

    props.members.map((member, index) => {
        arrmm.push(
            <div key={index} className="vertical-item content-padding text-center overflow-hidden col-sm-3 align-items-center">
                <div className="item-media">
                    <img className="img-thumbnail" src={ member['image-url'] } alt={ member.vorname } />
                    <div className="content-hover team-btn col-sm-2">
                        <a href="team/12" className="btn btn-small btn-maincolor">
                            Mail me
                        </a>
                    </div>
                </div>
                <div className="item-content">
                    <h6 className="team-name fw-700">
                        <a href="/team/12">{member.vorname} {member.nachname}</a>
                    </h6>
                    <p>{member.function}</p>
                    <p className="social-icons with-border">
                        <span>
                            <a
                                href={member.facebook}
                                className="fa fa-facebook border-icon rounded-icon"
                                title="facebook"
                            > </a>
                        </span>
                        <span>
                            <a
                                href={member.telegram}
                                className="fa fa-paper-plane border-icon rounded-icon"
                                title="telegram"
                            > </a>
                        </span>
                        <span>
                            <a
                                href={member.instagram}
                                className="fa fa-instagram border-icon rounded-icon"
                                title="instagram"
                            > </a>
                        </span>
                    </p>
                </div>
            </div>
        )
    })

    return arrmm;
    // console.log(members)
    // const listMem = members.map(member =>
    // (
    //     <div className="vertical-item content-padding text-center overflow-hidden">
    //         <div className="item-media">
    //             <img src="images/team/02.jpg" alt="" />
    //             <div className="content-hover team-btn">
    //                 <a href="team/12" className="btn btn-small btn-maincolor">
    //                     Mail me
    //                 </a>
    //             </div>
    //         </div>
    //         <div className="item-content">
    //             <h6 className="team-name fw-700">
    //                 {/* <a href="/team/12">{props.member.vorname} {props.member.nachname}</a> */}
    //             </h6>
    //             {/* <p>{props.member.function}</p> */}
    //             <p className="social-icons with-border">
    //                 <span>
    //                     <a
    //                         // href={props.member.facebook}
    //                         className="fa fa-facebook border-icon rounded-icon"
    //                         title="facebook"
    //                     > </a>
    //                 </span>
    //                 <span>
    //                     <a
    //                         // href={props.member.telegram}
    //                         className="fa fa-paper-plane border-icon rounded-icon"
    //                         title="telegram"
    //                     > </a>
    //                 </span>
    //                 <span>
    //                     <a
    //                         // href={props.member.instagram}
    //                         className="fa fa-instagram border-icon rounded-icon"
    //                         title="instagram"
    //                     > </a>
    //                 </span>
    //             </p>
    //         </div>
    //     </div>
    // )
    // )

    // console.log(listMem)


    return 'jora'




    // return (
    //     <div className="vertical-item content-padding text-center overflow-hidden">
    //         <div className="item-media">
    //             <img src="images/team/02.jpg" alt="" />
    //             <div className="content-hover team-btn">
    //                 <a href="team/12" className="btn btn-small btn-maincolor">
    //                     Mail me
    //                 </a>
    //             </div>
    //         </div>
    //         <div className="item-content">
    //             <h6 className="team-name fw-700">
    //                 {/* <a href="/team/12">{props.member.vorname} {props.member.nachname}</a> */}
    //             </h6>
    //             {/* <p>{props.member.function}</p> */}
    //             <p className="social-icons with-border">
    //                 <span>
    //                     <a
    //                         // href={props.member.facebook}
    //                         className="fa fa-facebook border-icon rounded-icon"
    //                         title="facebook"
    //                     > </a>
    //                 </span>
    //                 <span>
    //                     <a
    //                         // href={props.member.telegram}
    //                         className="fa fa-paper-plane border-icon rounded-icon"
    //                         title="telegram"
    //                     > </a>
    //                 </span>
    //                 <span>
    //                     <a
    //                         // href={props.member.instagram}
    //                         className="fa fa-instagram border-icon rounded-icon"
    //                         title="instagram"
    //                     > </a>
    //                 </span>
    //             </p>
    //         </div>
    //     </div>

    // );
}

export default TeamSingle;