/* tslint:disable */
/* eslint-disable */
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.8.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { App } from './App';
import {
    AppFromJSON,
    AppFromJSONTyped,
    AppToJSON,
} from './App';
import type { BetaLicenseAgreement } from './BetaLicenseAgreement';
import {
    BetaLicenseAgreementFromJSON,
    BetaLicenseAgreementFromJSONTyped,
    BetaLicenseAgreementToJSON,
} from './BetaLicenseAgreement';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface BetaLicenseAgreementResponse
 */
export interface BetaLicenseAgreementResponse {
    /**
     * 
     * @type {BetaLicenseAgreement}
     * @memberof BetaLicenseAgreementResponse
     */
    data: BetaLicenseAgreement;
    /**
     * 
     * @type {Array<App>}
     * @memberof BetaLicenseAgreementResponse
     */
    included?: Array<App>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof BetaLicenseAgreementResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the BetaLicenseAgreementResponse interface.
 */
export function instanceOfBetaLicenseAgreementResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function BetaLicenseAgreementResponseFromJSON(json: any): BetaLicenseAgreementResponse {
    return BetaLicenseAgreementResponseFromJSONTyped(json, false);
}

export function BetaLicenseAgreementResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaLicenseAgreementResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': BetaLicenseAgreementFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(AppFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function BetaLicenseAgreementResponseToJSON(value?: BetaLicenseAgreementResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': BetaLicenseAgreementToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(AppToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

