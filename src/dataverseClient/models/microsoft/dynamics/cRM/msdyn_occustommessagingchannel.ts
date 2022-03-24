import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_liveworkstreamFromDiscriminatorValue} from './createMsdyn_liveworkstreamFromDiscriminatorValue';
import {createMsdyn_ocbotchannelregistrationFromDiscriminatorValue} from './createMsdyn_ocbotchannelregistrationFromDiscriminatorValue';
import {createMsdyn_oclanguageFromDiscriminatorValue} from './createMsdyn_oclanguageFromDiscriminatorValue';
import {createMsfp_surveyFromDiscriminatorValue} from './createMsfp_surveyFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_liveworkstream, Msdyn_ocbotchannelregistration, Msdyn_oclanguage, Msfp_survey, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_occustommessagingchannel extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_custombotchannelregistration_value?: string | undefined;
    private __msdyn_liveworkstreamid_value?: string | undefined;
    private __msdyn_ocwidgetlanguage_value?: string | undefined;
    private __msdyn_postconversationsurvey_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_custombotchannelregistration?: Msdyn_ocbotchannelregistration | undefined;
    private _msdyn_enablefileattachmentsforagents?: boolean | undefined;
    private _msdyn_enablefileattachmentsforcustomers?: boolean | undefined;
    private _msdyn_liveworkstreamid?: Msdyn_liveworkstream | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_occustomchannelid?: number | undefined;
    private _msdyn_occustommessagingchannel_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_occustommessagingchannel_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_occustommessagingchannel_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_occustommessagingchannel_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_occustommessagingchannel_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_occustommessagingchannel_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_occustommessagingchannel_ProcessSession?: Processsession[] | undefined;
    private _msdyn_occustommessagingchannel_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_occustommessagingchannelid?: string | undefined;
    private _msdyn_ocwidgetlanguage?: Msdyn_oclanguage | undefined;
    private _msdyn_PostConversationSurvey?: Msfp_survey | undefined;
    private _msdyn_postconversationsurveyenable?: boolean | undefined;
    private _msdyn_postconversationsurveymessagetext?: string | undefined;
    private _msdyn_postconversationsurveymode?: number | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _createdby_value property value. 
     * @returns a string
     */
    public get _createdby_value() {
        return this.__createdby_value;
    };
    /**
     * Sets the _createdby_value property value. 
     * @param value Value to set for the _createdby_value property.
     */
    public set _createdby_value(value: string | undefined) {
        this.__createdby_value = value;
    };
    /**
     * Gets the _createdonbehalfby_value property value. 
     * @returns a string
     */
    public get _createdonbehalfby_value() {
        return this.__createdonbehalfby_value;
    };
    /**
     * Sets the _createdonbehalfby_value property value. 
     * @param value Value to set for the _createdonbehalfby_value property.
     */
    public set _createdonbehalfby_value(value: string | undefined) {
        this.__createdonbehalfby_value = value;
    };
    /**
     * Gets the _modifiedby_value property value. 
     * @returns a string
     */
    public get _modifiedby_value() {
        return this.__modifiedby_value;
    };
    /**
     * Sets the _modifiedby_value property value. 
     * @param value Value to set for the _modifiedby_value property.
     */
    public set _modifiedby_value(value: string | undefined) {
        this.__modifiedby_value = value;
    };
    /**
     * Gets the _modifiedonbehalfby_value property value. 
     * @returns a string
     */
    public get _modifiedonbehalfby_value() {
        return this.__modifiedonbehalfby_value;
    };
    /**
     * Sets the _modifiedonbehalfby_value property value. 
     * @param value Value to set for the _modifiedonbehalfby_value property.
     */
    public set _modifiedonbehalfby_value(value: string | undefined) {
        this.__modifiedonbehalfby_value = value;
    };
    /**
     * Gets the _msdyn_custombotchannelregistration_value property value. 
     * @returns a string
     */
    public get _msdyn_custombotchannelregistration_value() {
        return this.__msdyn_custombotchannelregistration_value;
    };
    /**
     * Sets the _msdyn_custombotchannelregistration_value property value. 
     * @param value Value to set for the _msdyn_custombotchannelregistration_value property.
     */
    public set _msdyn_custombotchannelregistration_value(value: string | undefined) {
        this.__msdyn_custombotchannelregistration_value = value;
    };
    /**
     * Gets the _msdyn_liveworkstreamid_value property value. 
     * @returns a string
     */
    public get _msdyn_liveworkstreamid_value() {
        return this.__msdyn_liveworkstreamid_value;
    };
    /**
     * Sets the _msdyn_liveworkstreamid_value property value. 
     * @param value Value to set for the _msdyn_liveworkstreamid_value property.
     */
    public set _msdyn_liveworkstreamid_value(value: string | undefined) {
        this.__msdyn_liveworkstreamid_value = value;
    };
    /**
     * Gets the _msdyn_ocwidgetlanguage_value property value. 
     * @returns a string
     */
    public get _msdyn_ocwidgetlanguage_value() {
        return this.__msdyn_ocwidgetlanguage_value;
    };
    /**
     * Sets the _msdyn_ocwidgetlanguage_value property value. 
     * @param value Value to set for the _msdyn_ocwidgetlanguage_value property.
     */
    public set _msdyn_ocwidgetlanguage_value(value: string | undefined) {
        this.__msdyn_ocwidgetlanguage_value = value;
    };
    /**
     * Gets the _msdyn_postconversationsurvey_value property value. 
     * @returns a string
     */
    public get _msdyn_postconversationsurvey_value() {
        return this.__msdyn_postconversationsurvey_value;
    };
    /**
     * Sets the _msdyn_postconversationsurvey_value property value. 
     * @param value Value to set for the _msdyn_postconversationsurvey_value property.
     */
    public set _msdyn_postconversationsurvey_value(value: string | undefined) {
        this.__msdyn_postconversationsurvey_value = value;
    };
    /**
     * Gets the _ownerid_value property value. 
     * @returns a string
     */
    public get _ownerid_value() {
        return this.__ownerid_value;
    };
    /**
     * Sets the _ownerid_value property value. 
     * @param value Value to set for the _ownerid_value property.
     */
    public set _ownerid_value(value: string | undefined) {
        this.__ownerid_value = value;
    };
    /**
     * Gets the _owningbusinessunit_value property value. 
     * @returns a string
     */
    public get _owningbusinessunit_value() {
        return this.__owningbusinessunit_value;
    };
    /**
     * Sets the _owningbusinessunit_value property value. 
     * @param value Value to set for the _owningbusinessunit_value property.
     */
    public set _owningbusinessunit_value(value: string | undefined) {
        this.__owningbusinessunit_value = value;
    };
    /**
     * Gets the _owningteam_value property value. 
     * @returns a string
     */
    public get _owningteam_value() {
        return this.__owningteam_value;
    };
    /**
     * Sets the _owningteam_value property value. 
     * @param value Value to set for the _owningteam_value property.
     */
    public set _owningteam_value(value: string | undefined) {
        this.__owningteam_value = value;
    };
    /**
     * Gets the _owninguser_value property value. 
     * @returns a string
     */
    public get _owninguser_value() {
        return this.__owninguser_value;
    };
    /**
     * Sets the _owninguser_value property value. 
     * @param value Value to set for the _owninguser_value property.
     */
    public set _owninguser_value(value: string | undefined) {
        this.__owninguser_value = value;
    };
    /**
     * Instantiates a new msdyn_occustommessagingchannel and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdby property value. 
     * @returns a systemuser
     */
    public get createdby() {
        return this._createdby;
    };
    /**
     * Sets the createdby property value. 
     * @param value Value to set for the createdby property.
     */
    public set createdby(value: Systemuser | undefined) {
        this._createdby = value;
    };
    /**
     * Gets the createdon property value. 
     * @returns a Date
     */
    public get createdon() {
        return this._createdon;
    };
    /**
     * Sets the createdon property value. 
     * @param value Value to set for the createdon property.
     */
    public set createdon(value: Date | undefined) {
        this._createdon = value;
    };
    /**
     * Gets the createdonbehalfby property value. 
     * @returns a systemuser
     */
    public get createdonbehalfby() {
        return this._createdonbehalfby;
    };
    /**
     * Sets the createdonbehalfby property value. 
     * @param value Value to set for the createdonbehalfby property.
     */
    public set createdonbehalfby(value: Systemuser | undefined) {
        this._createdonbehalfby = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_occustommessagingchannel)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_occustommessagingchannel)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_occustommessagingchannel)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_occustommessagingchannel)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_custombotchannelregistration_value": (o, n) => { (o as unknown as Msdyn_occustommessagingchannel)._msdyn_custombotchannelregistration_value = n.getStringValue(); },
            "_msdyn_liveworkstreamid_value": (o, n) => { (o as unknown as Msdyn_occustommessagingchannel)._msdyn_liveworkstreamid_value = n.getStringValue(); },
            "_msdyn_ocwidgetlanguage_value": (o, n) => { (o as unknown as Msdyn_occustommessagingchannel)._msdyn_ocwidgetlanguage_value = n.getStringValue(); },
            "_msdyn_postconversationsurvey_value": (o, n) => { (o as unknown as Msdyn_occustommessagingchannel)._msdyn_postconversationsurvey_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_occustommessagingchannel)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_occustommessagingchannel)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_occustommessagingchannel)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_occustommessagingchannel)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_occustommessagingchannel).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_occustommessagingchannel).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_occustommessagingchannel).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_occustommessagingchannel).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_occustommessagingchannel).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_occustommessagingchannel).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_occustommessagingchannel).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_custombotchannelregistration": (o, n) => { (o as unknown as Msdyn_occustommessagingchannel).msdyn_custombotchannelregistration = n.getObjectValue<Msdyn_ocbotchannelregistration>(createMsdyn_ocbotchannelregistrationFromDiscriminatorValue); },
            "msdyn_enablefileattachmentsforagents": (o, n) => { (o as unknown as Msdyn_occustommessagingchannel).msdyn_enablefileattachmentsforagents = n.getBooleanValue(); },
            "msdyn_enablefileattachmentsforcustomers": (o, n) => { (o as unknown as Msdyn_occustommessagingchannel).msdyn_enablefileattachmentsforcustomers = n.getBooleanValue(); },
            "msdyn_liveworkstreamid": (o, n) => { (o as unknown as Msdyn_occustommessagingchannel).msdyn_liveworkstreamid = n.getObjectValue<Msdyn_liveworkstream>(createMsdyn_liveworkstreamFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_occustommessagingchannel).msdyn_name = n.getStringValue(); },
            "msdyn_occustomchannelid": (o, n) => { (o as unknown as Msdyn_occustommessagingchannel).msdyn_occustomchannelid = n.getNumberValue(); },
            "msdyn_occustommessagingchannel_AsyncOperations": (o, n) => { (o as unknown as Msdyn_occustommessagingchannel).msdyn_occustommessagingchannel_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_occustommessagingchannel_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_occustommessagingchannel).msdyn_occustommessagingchannel_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_occustommessagingchannel_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_occustommessagingchannel).msdyn_occustommessagingchannel_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_occustommessagingchannel_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_occustommessagingchannel).msdyn_occustommessagingchannel_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_occustommessagingchannel_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_occustommessagingchannel).msdyn_occustommessagingchannel_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_occustommessagingchannel_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_occustommessagingchannel).msdyn_occustommessagingchannel_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_occustommessagingchannel_ProcessSession": (o, n) => { (o as unknown as Msdyn_occustommessagingchannel).msdyn_occustommessagingchannel_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_occustommessagingchannel_SyncErrors": (o, n) => { (o as unknown as Msdyn_occustommessagingchannel).msdyn_occustommessagingchannel_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_occustommessagingchannelid": (o, n) => { (o as unknown as Msdyn_occustommessagingchannel).msdyn_occustommessagingchannelid = n.getStringValue(); },
            "msdyn_ocwidgetlanguage": (o, n) => { (o as unknown as Msdyn_occustommessagingchannel).msdyn_ocwidgetlanguage = n.getObjectValue<Msdyn_oclanguage>(createMsdyn_oclanguageFromDiscriminatorValue); },
            "msdyn_PostConversationSurvey": (o, n) => { (o as unknown as Msdyn_occustommessagingchannel).msdyn_PostConversationSurvey = n.getObjectValue<Msfp_survey>(createMsfp_surveyFromDiscriminatorValue); },
            "msdyn_postconversationsurveyenable": (o, n) => { (o as unknown as Msdyn_occustommessagingchannel).msdyn_postconversationsurveyenable = n.getBooleanValue(); },
            "msdyn_postconversationsurveymessagetext": (o, n) => { (o as unknown as Msdyn_occustommessagingchannel).msdyn_postconversationsurveymessagetext = n.getStringValue(); },
            "msdyn_postconversationsurveymode": (o, n) => { (o as unknown as Msdyn_occustommessagingchannel).msdyn_postconversationsurveymode = n.getNumberValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_occustommessagingchannel).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_occustommessagingchannel).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_occustommessagingchannel).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_occustommessagingchannel).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_occustommessagingchannel).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_occustommessagingchannel).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_occustommessagingchannel).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_occustommessagingchannel).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_occustommessagingchannel).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_occustommessagingchannel).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the importsequencenumber property value. 
     * @returns a integer
     */
    public get importsequencenumber() {
        return this._importsequencenumber;
    };
    /**
     * Sets the importsequencenumber property value. 
     * @param value Value to set for the importsequencenumber property.
     */
    public set importsequencenumber(value: number | undefined) {
        this._importsequencenumber = value;
    };
    /**
     * Gets the modifiedby property value. 
     * @returns a systemuser
     */
    public get modifiedby() {
        return this._modifiedby;
    };
    /**
     * Sets the modifiedby property value. 
     * @param value Value to set for the modifiedby property.
     */
    public set modifiedby(value: Systemuser | undefined) {
        this._modifiedby = value;
    };
    /**
     * Gets the modifiedon property value. 
     * @returns a Date
     */
    public get modifiedon() {
        return this._modifiedon;
    };
    /**
     * Sets the modifiedon property value. 
     * @param value Value to set for the modifiedon property.
     */
    public set modifiedon(value: Date | undefined) {
        this._modifiedon = value;
    };
    /**
     * Gets the modifiedonbehalfby property value. 
     * @returns a systemuser
     */
    public get modifiedonbehalfby() {
        return this._modifiedonbehalfby;
    };
    /**
     * Sets the modifiedonbehalfby property value. 
     * @param value Value to set for the modifiedonbehalfby property.
     */
    public set modifiedonbehalfby(value: Systemuser | undefined) {
        this._modifiedonbehalfby = value;
    };
    /**
     * Gets the msdyn_custombotchannelregistration property value. 
     * @returns a msdyn_ocbotchannelregistration
     */
    public get msdyn_custombotchannelregistration() {
        return this._msdyn_custombotchannelregistration;
    };
    /**
     * Sets the msdyn_custombotchannelregistration property value. 
     * @param value Value to set for the msdyn_custombotchannelregistration property.
     */
    public set msdyn_custombotchannelregistration(value: Msdyn_ocbotchannelregistration | undefined) {
        this._msdyn_custombotchannelregistration = value;
    };
    /**
     * Gets the msdyn_enablefileattachmentsforagents property value. 
     * @returns a boolean
     */
    public get msdyn_enablefileattachmentsforagents() {
        return this._msdyn_enablefileattachmentsforagents;
    };
    /**
     * Sets the msdyn_enablefileattachmentsforagents property value. 
     * @param value Value to set for the msdyn_enablefileattachmentsforagents property.
     */
    public set msdyn_enablefileattachmentsforagents(value: boolean | undefined) {
        this._msdyn_enablefileattachmentsforagents = value;
    };
    /**
     * Gets the msdyn_enablefileattachmentsforcustomers property value. 
     * @returns a boolean
     */
    public get msdyn_enablefileattachmentsforcustomers() {
        return this._msdyn_enablefileattachmentsforcustomers;
    };
    /**
     * Sets the msdyn_enablefileattachmentsforcustomers property value. 
     * @param value Value to set for the msdyn_enablefileattachmentsforcustomers property.
     */
    public set msdyn_enablefileattachmentsforcustomers(value: boolean | undefined) {
        this._msdyn_enablefileattachmentsforcustomers = value;
    };
    /**
     * Gets the msdyn_liveworkstreamid property value. 
     * @returns a msdyn_liveworkstream
     */
    public get msdyn_liveworkstreamid() {
        return this._msdyn_liveworkstreamid;
    };
    /**
     * Sets the msdyn_liveworkstreamid property value. 
     * @param value Value to set for the msdyn_liveworkstreamid property.
     */
    public set msdyn_liveworkstreamid(value: Msdyn_liveworkstream | undefined) {
        this._msdyn_liveworkstreamid = value;
    };
    /**
     * Gets the msdyn_name property value. 
     * @returns a string
     */
    public get msdyn_name() {
        return this._msdyn_name;
    };
    /**
     * Sets the msdyn_name property value. 
     * @param value Value to set for the msdyn_name property.
     */
    public set msdyn_name(value: string | undefined) {
        this._msdyn_name = value;
    };
    /**
     * Gets the msdyn_occustomchannelid property value. 
     * @returns a integer
     */
    public get msdyn_occustomchannelid() {
        return this._msdyn_occustomchannelid;
    };
    /**
     * Sets the msdyn_occustomchannelid property value. 
     * @param value Value to set for the msdyn_occustomchannelid property.
     */
    public set msdyn_occustomchannelid(value: number | undefined) {
        this._msdyn_occustomchannelid = value;
    };
    /**
     * Gets the msdyn_occustommessagingchannel_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_occustommessagingchannel_AsyncOperations() {
        return this._msdyn_occustommessagingchannel_AsyncOperations;
    };
    /**
     * Sets the msdyn_occustommessagingchannel_AsyncOperations property value. 
     * @param value Value to set for the msdyn_occustommessagingchannel_AsyncOperations property.
     */
    public set msdyn_occustommessagingchannel_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_occustommessagingchannel_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_occustommessagingchannel_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_occustommessagingchannel_BulkDeleteFailures() {
        return this._msdyn_occustommessagingchannel_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_occustommessagingchannel_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_occustommessagingchannel_BulkDeleteFailures property.
     */
    public set msdyn_occustommessagingchannel_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_occustommessagingchannel_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_occustommessagingchannel_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_occustommessagingchannel_DuplicateBaseRecord() {
        return this._msdyn_occustommessagingchannel_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_occustommessagingchannel_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_occustommessagingchannel_DuplicateBaseRecord property.
     */
    public set msdyn_occustommessagingchannel_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_occustommessagingchannel_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_occustommessagingchannel_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_occustommessagingchannel_DuplicateMatchingRecord() {
        return this._msdyn_occustommessagingchannel_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_occustommessagingchannel_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_occustommessagingchannel_DuplicateMatchingRecord property.
     */
    public set msdyn_occustommessagingchannel_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_occustommessagingchannel_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_occustommessagingchannel_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_occustommessagingchannel_MailboxTrackingFolders() {
        return this._msdyn_occustommessagingchannel_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_occustommessagingchannel_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_occustommessagingchannel_MailboxTrackingFolders property.
     */
    public set msdyn_occustommessagingchannel_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_occustommessagingchannel_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_occustommessagingchannel_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_occustommessagingchannel_PrincipalObjectAttributeAccesses() {
        return this._msdyn_occustommessagingchannel_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_occustommessagingchannel_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_occustommessagingchannel_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_occustommessagingchannel_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_occustommessagingchannel_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_occustommessagingchannel_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_occustommessagingchannel_ProcessSession() {
        return this._msdyn_occustommessagingchannel_ProcessSession;
    };
    /**
     * Sets the msdyn_occustommessagingchannel_ProcessSession property value. 
     * @param value Value to set for the msdyn_occustommessagingchannel_ProcessSession property.
     */
    public set msdyn_occustommessagingchannel_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_occustommessagingchannel_ProcessSession = value;
    };
    /**
     * Gets the msdyn_occustommessagingchannel_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_occustommessagingchannel_SyncErrors() {
        return this._msdyn_occustommessagingchannel_SyncErrors;
    };
    /**
     * Sets the msdyn_occustommessagingchannel_SyncErrors property value. 
     * @param value Value to set for the msdyn_occustommessagingchannel_SyncErrors property.
     */
    public set msdyn_occustommessagingchannel_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_occustommessagingchannel_SyncErrors = value;
    };
    /**
     * Gets the msdyn_occustommessagingchannelid property value. 
     * @returns a string
     */
    public get msdyn_occustommessagingchannelid() {
        return this._msdyn_occustommessagingchannelid;
    };
    /**
     * Sets the msdyn_occustommessagingchannelid property value. 
     * @param value Value to set for the msdyn_occustommessagingchannelid property.
     */
    public set msdyn_occustommessagingchannelid(value: string | undefined) {
        this._msdyn_occustommessagingchannelid = value;
    };
    /**
     * Gets the msdyn_ocwidgetlanguage property value. 
     * @returns a msdyn_oclanguage
     */
    public get msdyn_ocwidgetlanguage() {
        return this._msdyn_ocwidgetlanguage;
    };
    /**
     * Sets the msdyn_ocwidgetlanguage property value. 
     * @param value Value to set for the msdyn_ocwidgetlanguage property.
     */
    public set msdyn_ocwidgetlanguage(value: Msdyn_oclanguage | undefined) {
        this._msdyn_ocwidgetlanguage = value;
    };
    /**
     * Gets the msdyn_PostConversationSurvey property value. 
     * @returns a msfp_survey
     */
    public get msdyn_PostConversationSurvey() {
        return this._msdyn_PostConversationSurvey;
    };
    /**
     * Sets the msdyn_PostConversationSurvey property value. 
     * @param value Value to set for the msdyn_PostConversationSurvey property.
     */
    public set msdyn_PostConversationSurvey(value: Msfp_survey | undefined) {
        this._msdyn_PostConversationSurvey = value;
    };
    /**
     * Gets the msdyn_postconversationsurveyenable property value. 
     * @returns a boolean
     */
    public get msdyn_postconversationsurveyenable() {
        return this._msdyn_postconversationsurveyenable;
    };
    /**
     * Sets the msdyn_postconversationsurveyenable property value. 
     * @param value Value to set for the msdyn_postconversationsurveyenable property.
     */
    public set msdyn_postconversationsurveyenable(value: boolean | undefined) {
        this._msdyn_postconversationsurveyenable = value;
    };
    /**
     * Gets the msdyn_postconversationsurveymessagetext property value. 
     * @returns a string
     */
    public get msdyn_postconversationsurveymessagetext() {
        return this._msdyn_postconversationsurveymessagetext;
    };
    /**
     * Sets the msdyn_postconversationsurveymessagetext property value. 
     * @param value Value to set for the msdyn_postconversationsurveymessagetext property.
     */
    public set msdyn_postconversationsurveymessagetext(value: string | undefined) {
        this._msdyn_postconversationsurveymessagetext = value;
    };
    /**
     * Gets the msdyn_postconversationsurveymode property value. 
     * @returns a integer
     */
    public get msdyn_postconversationsurveymode() {
        return this._msdyn_postconversationsurveymode;
    };
    /**
     * Sets the msdyn_postconversationsurveymode property value. 
     * @param value Value to set for the msdyn_postconversationsurveymode property.
     */
    public set msdyn_postconversationsurveymode(value: number | undefined) {
        this._msdyn_postconversationsurveymode = value;
    };
    /**
     * Gets the overriddencreatedon property value. 
     * @returns a Date
     */
    public get overriddencreatedon() {
        return this._overriddencreatedon;
    };
    /**
     * Sets the overriddencreatedon property value. 
     * @param value Value to set for the overriddencreatedon property.
     */
    public set overriddencreatedon(value: Date | undefined) {
        this._overriddencreatedon = value;
    };
    /**
     * Gets the ownerid property value. 
     * @returns a principal
     */
    public get ownerid() {
        return this._ownerid;
    };
    /**
     * Sets the ownerid property value. 
     * @param value Value to set for the ownerid property.
     */
    public set ownerid(value: Principal | undefined) {
        this._ownerid = value;
    };
    /**
     * Gets the owningbusinessunit property value. 
     * @returns a businessunit
     */
    public get owningbusinessunit() {
        return this._owningbusinessunit;
    };
    /**
     * Sets the owningbusinessunit property value. 
     * @param value Value to set for the owningbusinessunit property.
     */
    public set owningbusinessunit(value: Businessunit | undefined) {
        this._owningbusinessunit = value;
    };
    /**
     * Gets the owningteam property value. 
     * @returns a team
     */
    public get owningteam() {
        return this._owningteam;
    };
    /**
     * Sets the owningteam property value. 
     * @param value Value to set for the owningteam property.
     */
    public set owningteam(value: Team | undefined) {
        this._owningteam = value;
    };
    /**
     * Gets the owninguser property value. 
     * @returns a systemuser
     */
    public get owninguser() {
        return this._owninguser;
    };
    /**
     * Sets the owninguser property value. 
     * @param value Value to set for the owninguser property.
     */
    public set owninguser(value: Systemuser | undefined) {
        this._owninguser = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_msdyn_custombotchannelregistration_value", this._msdyn_custombotchannelregistration_value);
        writer.writeStringValue("_msdyn_liveworkstreamid_value", this._msdyn_liveworkstreamid_value);
        writer.writeStringValue("_msdyn_ocwidgetlanguage_value", this._msdyn_ocwidgetlanguage_value);
        writer.writeStringValue("_msdyn_postconversationsurvey_value", this._msdyn_postconversationsurvey_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Msdyn_ocbotchannelregistration>("msdyn_custombotchannelregistration", this.msdyn_custombotchannelregistration);
        writer.writeBooleanValue("msdyn_enablefileattachmentsforagents", this.msdyn_enablefileattachmentsforagents);
        writer.writeBooleanValue("msdyn_enablefileattachmentsforcustomers", this.msdyn_enablefileattachmentsforcustomers);
        writer.writeObjectValue<Msdyn_liveworkstream>("msdyn_liveworkstreamid", this.msdyn_liveworkstreamid);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeNumberValue("msdyn_occustomchannelid", this.msdyn_occustomchannelid);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_occustommessagingchannel_AsyncOperations", this.msdyn_occustommessagingchannel_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_occustommessagingchannel_BulkDeleteFailures", this.msdyn_occustommessagingchannel_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_occustommessagingchannel_DuplicateBaseRecord", this.msdyn_occustommessagingchannel_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_occustommessagingchannel_DuplicateMatchingRecord", this.msdyn_occustommessagingchannel_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_occustommessagingchannel_MailboxTrackingFolders", this.msdyn_occustommessagingchannel_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_occustommessagingchannel_PrincipalObjectAttributeAccesses", this.msdyn_occustommessagingchannel_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_occustommessagingchannel_ProcessSession", this.msdyn_occustommessagingchannel_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_occustommessagingchannel_SyncErrors", this.msdyn_occustommessagingchannel_SyncErrors);
        writer.writeStringValue("msdyn_occustommessagingchannelid", this.msdyn_occustommessagingchannelid);
        writer.writeObjectValue<Msdyn_oclanguage>("msdyn_ocwidgetlanguage", this.msdyn_ocwidgetlanguage);
        writer.writeObjectValue<Msfp_survey>("msdyn_PostConversationSurvey", this.msdyn_PostConversationSurvey);
        writer.writeBooleanValue("msdyn_postconversationsurveyenable", this.msdyn_postconversationsurveyenable);
        writer.writeStringValue("msdyn_postconversationsurveymessagetext", this.msdyn_postconversationsurveymessagetext);
        writer.writeNumberValue("msdyn_postconversationsurveymode", this.msdyn_postconversationsurveymode);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the statecode property value. 
     * @returns a integer
     */
    public get statecode() {
        return this._statecode;
    };
    /**
     * Sets the statecode property value. 
     * @param value Value to set for the statecode property.
     */
    public set statecode(value: number | undefined) {
        this._statecode = value;
    };
    /**
     * Gets the statuscode property value. 
     * @returns a integer
     */
    public get statuscode() {
        return this._statuscode;
    };
    /**
     * Sets the statuscode property value. 
     * @param value Value to set for the statuscode property.
     */
    public set statuscode(value: number | undefined) {
        this._statuscode = value;
    };
    /**
     * Gets the timezoneruleversionnumber property value. 
     * @returns a integer
     */
    public get timezoneruleversionnumber() {
        return this._timezoneruleversionnumber;
    };
    /**
     * Sets the timezoneruleversionnumber property value. 
     * @param value Value to set for the timezoneruleversionnumber property.
     */
    public set timezoneruleversionnumber(value: number | undefined) {
        this._timezoneruleversionnumber = value;
    };
    /**
     * Gets the utcconversiontimezonecode property value. 
     * @returns a integer
     */
    public get utcconversiontimezonecode() {
        return this._utcconversiontimezonecode;
    };
    /**
     * Sets the utcconversiontimezonecode property value. 
     * @param value Value to set for the utcconversiontimezonecode property.
     */
    public set utcconversiontimezonecode(value: number | undefined) {
        this._utcconversiontimezonecode = value;
    };
    /**
     * Gets the versionnumber property value. 
     * @returns a int64
     */
    public get versionnumber() {
        return this._versionnumber;
    };
    /**
     * Sets the versionnumber property value. 
     * @param value Value to set for the versionnumber property.
     */
    public set versionnumber(value: number | undefined) {
        this._versionnumber = value;
    };
}
