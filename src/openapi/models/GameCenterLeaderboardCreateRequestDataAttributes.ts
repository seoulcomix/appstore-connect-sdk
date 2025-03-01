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
import type { Decimal } from './Decimal';
import {
    DecimalFromJSON,
    DecimalFromJSONTyped,
    DecimalToJSON,
} from './Decimal';
import type { GameCenterLeaderboardFormatter } from './GameCenterLeaderboardFormatter';
import {
    GameCenterLeaderboardFormatterFromJSON,
    GameCenterLeaderboardFormatterFromJSONTyped,
    GameCenterLeaderboardFormatterToJSON,
} from './GameCenterLeaderboardFormatter';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardCreateRequestDataAttributes
 */
export interface GameCenterLeaderboardCreateRequestDataAttributes {
    /**
     * 
     * @type {GameCenterLeaderboardFormatter}
     * @memberof GameCenterLeaderboardCreateRequestDataAttributes
     */
    defaultFormatter: GameCenterLeaderboardFormatter;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardCreateRequestDataAttributes
     */
    referenceName: string;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardCreateRequestDataAttributes
     */
    vendorIdentifier: string;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardCreateRequestDataAttributes
     */
    submissionType: GameCenterLeaderboardCreateRequestDataAttributesSubmissionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardCreateRequestDataAttributes
     */
    scoreSortType: GameCenterLeaderboardCreateRequestDataAttributesScoreSortTypeEnum;
    /**
     * 
     * @type {Decimal}
     * @memberof GameCenterLeaderboardCreateRequestDataAttributes
     */
    scoreRangeStart?: Decimal;
    /**
     * 
     * @type {Decimal}
     * @memberof GameCenterLeaderboardCreateRequestDataAttributes
     */
    scoreRangeEnd?: Decimal;
    /**
     * 
     * @type {Date}
     * @memberof GameCenterLeaderboardCreateRequestDataAttributes
     */
    recurrenceStartDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardCreateRequestDataAttributes
     */
    recurrenceDuration?: string;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardCreateRequestDataAttributes
     */
    recurrenceRule?: string;
}


/**
 * @export
 */
export const GameCenterLeaderboardCreateRequestDataAttributesSubmissionTypeEnum = {
    BestScore: 'BEST_SCORE',
    MostRecentScore: 'MOST_RECENT_SCORE'
} as const;
export type GameCenterLeaderboardCreateRequestDataAttributesSubmissionTypeEnum = typeof GameCenterLeaderboardCreateRequestDataAttributesSubmissionTypeEnum[keyof typeof GameCenterLeaderboardCreateRequestDataAttributesSubmissionTypeEnum];

/**
 * @export
 */
export const GameCenterLeaderboardCreateRequestDataAttributesScoreSortTypeEnum = {
    Asc: 'ASC',
    Desc: 'DESC'
} as const;
export type GameCenterLeaderboardCreateRequestDataAttributesScoreSortTypeEnum = typeof GameCenterLeaderboardCreateRequestDataAttributesScoreSortTypeEnum[keyof typeof GameCenterLeaderboardCreateRequestDataAttributesScoreSortTypeEnum];


/**
 * Check if a given object implements the GameCenterLeaderboardCreateRequestDataAttributes interface.
 */
export function instanceOfGameCenterLeaderboardCreateRequestDataAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "defaultFormatter" in value;
    isInstance = isInstance && "referenceName" in value;
    isInstance = isInstance && "vendorIdentifier" in value;
    isInstance = isInstance && "submissionType" in value;
    isInstance = isInstance && "scoreSortType" in value;

    return isInstance;
}

export function GameCenterLeaderboardCreateRequestDataAttributesFromJSON(json: any): GameCenterLeaderboardCreateRequestDataAttributes {
    return GameCenterLeaderboardCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function GameCenterLeaderboardCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardCreateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'defaultFormatter': GameCenterLeaderboardFormatterFromJSON(json['defaultFormatter']),
        'referenceName': json['referenceName'],
        'vendorIdentifier': json['vendorIdentifier'],
        'submissionType': json['submissionType'],
        'scoreSortType': json['scoreSortType'],
        'scoreRangeStart': !exists(json, 'scoreRangeStart') ? undefined : DecimalFromJSON(json['scoreRangeStart']),
        'scoreRangeEnd': !exists(json, 'scoreRangeEnd') ? undefined : DecimalFromJSON(json['scoreRangeEnd']),
        'recurrenceStartDate': !exists(json, 'recurrenceStartDate') ? undefined : (new Date(json['recurrenceStartDate'])),
        'recurrenceDuration': !exists(json, 'recurrenceDuration') ? undefined : json['recurrenceDuration'],
        'recurrenceRule': !exists(json, 'recurrenceRule') ? undefined : json['recurrenceRule'],
    };
}

export function GameCenterLeaderboardCreateRequestDataAttributesToJSON(value?: GameCenterLeaderboardCreateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'defaultFormatter': GameCenterLeaderboardFormatterToJSON(value.defaultFormatter),
        'referenceName': value.referenceName,
        'vendorIdentifier': value.vendorIdentifier,
        'submissionType': value.submissionType,
        'scoreSortType': value.scoreSortType,
        'scoreRangeStart': DecimalToJSON(value.scoreRangeStart),
        'scoreRangeEnd': DecimalToJSON(value.scoreRangeEnd),
        'recurrenceStartDate': value.recurrenceStartDate === undefined ? undefined : (value.recurrenceStartDate.toISOString()),
        'recurrenceDuration': value.recurrenceDuration,
        'recurrenceRule': value.recurrenceRule,
    };
}

