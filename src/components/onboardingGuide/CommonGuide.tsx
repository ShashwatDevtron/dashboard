import React from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { ReactComponent as Close } from '../../assets/icons/ic-close.svg'
import { ReactComponent as GoBack } from '../../assets/icons/ic-arrow-backward.svg'

function CommonGuide({ loginCount, title, subtitle, onClickCloseButton }) {
    const history = useHistory()
    const match = useRouteMatch()
    const isGuidePage = match.url.includes('guide')

    return (
        <div className="common-guide__container">
            <div className={`onboarding__upper h-300 bc-window bcn-1 ${loginCount <= 1 ? 'flex' : ''}`}>
                {loginCount > 1 && (
                    <button type="button" className="w-100 flex right transparent p-20" onClick={onClickCloseButton}>
                        <Close className="icon-dim-24" />
                    </button>
                )}
                <div className={`${loginCount > 1 ? 'deploy-manage__upper top' : 'h-300'} flex`}>
                    <div className="flex center">
                        {isGuidePage && (
                            <div className="bcn-0 deploy_arrow flex cursor" onClick={onClickCloseButton}>
                                <GoBack className="icon-dim-24" />
                            </div>
                        )}
                        <div className="ml-32">
                            <h1 className="fw-6 mb-8">{title}</h1>
                            <p className="fs-14 cn-7">{subtitle}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommonGuide
