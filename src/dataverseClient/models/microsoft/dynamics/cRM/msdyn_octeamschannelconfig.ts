import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_liveworkstreamFromDiscriminatorValue} from './createMsdyn_liveworkstreamFromDiscriminatorValue';
import {createMsdyn_ocbotchannelregistrationFromDiscriminatorValue} from './createMsdyn_ocbotchannelregistrationFromDiscriminatorValue';
import {createMsdyn_oclanguageFromDiscriminatorValue} from './createMsdyn_oclanguageFromDiscriminatorValue';
import {createMsdyn_ocprovisioningstateFromDiscriminatorValue} from './createMsdyn_ocprovisioningstateFromDiscriminatorValue';
import {createMsfp_surveyFromDiscriminatorValue} from './createMsfp_surveyFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_liveworkstream, Msdyn_ocbotchannelregistration, Msdyn_oclanguage, Msdyn_ocprovisioningstate, Msfp_survey, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_octeamschannelconfig extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
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
    private _msdyn_botid?: string | undefined;
    private _msdyn_enablefileattachmentsforagents?: boolean | undefined;
    private _msdyn_enablefileattachmentsforcustomers?: boolean | undefined;
    private _msdyn_liveworkstreamid?: Msdyn_liveworkstream | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_octeamschannelconfig_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_octeamschannelconfig_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_octeamschannelconfig_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_octeamschannelconfig_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_octeamschannelconfig_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_octeamschannelconfig_msdyn_ocbotchannelregistration_msdyn_octeamschannelconfigid?: Msdyn_ocbotchannelregistration[] | undefined;
    private _msdyn_octeamschannelconfig_msdyn_ocprovisioningstate_octeamschannelconfigid?: Msdyn_ocprovisioningstate[] | undefined;
    private _msdyn_octeamschannelconfig_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_octeamschannelconfig_ProcessSession?: Processsession[] | undefined;
    private _msdyn_octeamschannelconfig_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_octeamschannelconfigid?: string | undefined;
    private _msdyn_ocwidgetlanguage?: Msdyn_oclanguage | undefined;
    private _msdyn_PostConversationSurvey?: Msfp_survey | undefined;
    private _msdyn_postconversationsurveyenable?: boolean | undefined;
    private _msdyn_postconversationsurveymessagetext?: string | undefined;
    private _msdyn_postconversationsurveymode?: number | undefined;
    private _msdyn_teamsappname?: string | undefined;
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
     * Instantiates a new msdyn_octeamschannelconfig and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_octeamschannelconfig)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_octeamschannelconfig)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_octeamschannelconfig)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_octeamschannelconfig)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_liveworkstreamid_value": (o, n) => { (o as unknown as Msdyn_octeamschannelconfig)._msdyn_liveworkstreamid_value = n.getStringValue(); },
            "_msdyn_ocwidgetlanguage_value": (o, n) => { (o as unknown as Msdyn_octeamschannelconfig)._msdyn_ocwidgetlanguage_value = n.getStringValue(); },
            "_msdyn_postconversationsurvey_value": (o, n) => { (o as unknown as Msdyn_octeamschannelconfig)._msdyn_postconversationsurvey_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_octeamschannelconfig)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_octeamschannelconfig)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_octeamschannelconfig)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_octeamschannelconfig)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_octeamschannelconfig).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_octeamschannelconfig).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_octeamschannelconfig).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_octeamschannelconfig).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_octeamschannelconfig).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_octeamschannelconfig).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_octeamschannelconfig).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_botid": (o, n) => { (o as unknown as Msdyn_octeamschannelconfig).msdyn_botid = n.getStringValue(); },
            "msdyn_enablefileattachmentsforagents": (o, n) => { (o as unknown as Msdyn_octeamschannelconfig).msdyn_enablefileattachmentsforagents = n.getBooleanValue(); },
            "msdyn_enablefileattachmentsforcustomers": (o, n) => { (o as unknown as Msdyn_octeamschannelconfig).msdyn_enablefileattachmentsforcustomers = n.getBooleanValue(); },
            "msdyn_liveworkstreamid": (o, n) => { (o as unknown as Msdyn_octeamschannelconfig).msdyn_liveworkstreamid = n.getObjectValue<Msdyn_liveworkstream>(createMsdyn_liveworkstreamFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_octeamschannelconfig).msdyn_name = n.getStringValue(); },
            "msdyn_octeamschannelconfig_AsyncOperations": (o, n) => { (o as unknown as Msdyn_octeamschannelconfig).msdyn_octeamschannelconfig_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_octeamschannelconfig_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_octeamschannelconfig).msdyn_octeamschannelconfig_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_octeamschannelconfig_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_octeamschannelconfig).msdyn_octeamschannelconfig_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_octeamschannelconfig_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_octeamschannelconfig).msdyn_octeamschannelconfig_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_octeamschannelconfig_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_octeamschannelconfig).msdyn_octeamschannelconfig_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_octeamschannelconfig_msdyn_ocbotchannelregistration_msdyn_octeamschannelconfigid": (o, n) => { (o as unknown as Msdyn_octeamschannelconfig).msdyn_octeamschannelconfig_msdyn_ocbotchannelregistration_msdyn_octeamschannelconfigid = n.getCollectionOfObjectValues<Msdyn_ocbotchannelregistration>(createMsdyn_ocbotchannelregistrationFromDiscriminatorValue); },
            "msdyn_octeamschannelconfig_msdyn_ocprovisioningstate_octeamschannelconfigid": (o, n) => { (o as unknown as Msdyn_octeamschannelconfig).msdyn_octeamschannelconfig_msdyn_ocprovisioningstate_octeamschannelconfigid = n.getCollectionOfObjectValues<Msdyn_ocprovisioningstate>(createMsdyn_ocprovisioningstateFromDiscriminatorValue); },
            "msdyn_octeamschannelconfig_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_octeamschannelconfig).msdyn_octeamschannelconfig_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_octeamschannelconfig_ProcessSession": (o, n) => { (o as unknown as Msdyn_octeamschannelconfig).msdyn_octeamschannelconfig_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_octeamschannelconfig_SyncErrors": (o, n) => { (o as unknown as Msdyn_octeamschannelconfig).msdyn_octeamschannelconfig_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_octeamschannelconfigid": (o, n) => { (o as unknown as Msdyn_octeamschannelconfig).msdyn_octeamschannelconfigid = n.getStringValue(); },
            "msdyn_ocwidgetlanguage": (o, n) => { (o as unknown as Msdyn_octeamschannelconfig).msdyn_ocwidgetlanguage = n.getObjectValue<Msdyn_oclanguage>(createMsdyn_oclanguageFromDiscriminatorValue); },
            "msdyn_PostConversationSurvey": (o, n) => { (o as unknown as Msdyn_octeamschannelconfig).msdyn_PostConversationSurvey = n.getObjectValue<Msfp_survey>(createMsfp_surveyFromDiscriminatorValue); },
            "msdyn_postconversationsurveyenable": (o, n) => { (o as unknown as Msdyn_octeamschannelconfig).msdyn_postconversationsurveyenable = n.getBooleanValue(); },
            "msdyn_postconversationsurveymessagetext": (o, n) => { (o as unknown as Msdyn_octeamschannelconfig).msdyn_postconversationsurveymessagetext = n.getStringValue(); },
            "msdyn_postconversationsurveymode": (o, n) => { (o as unknown as Msdyn_octeamschannelconfig).msdyn_postconversationsurveymode = n.getNumberValue(); },
            "msdyn_teamsappname": (o, n) => { (o as unknown as Msdyn_octeamschannelconfig).msdyn_teamsappname = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_octeamschannelconfig).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_octeamschannelconfig).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_octeamschannelconfig).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_octeamschannelconfig).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_octeamschannelconfig).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_octeamschannelconfig).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_octeamschannelconfig).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_octeamschannelconfig).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_octeamschannelconfig).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_octeamschannelconfig).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_botid property value. 
     * @returns a string
     */
    public get msdyn_botid() {
        return this._msdyn_botid;
    };
    /**
     * Sets the msdyn_botid property value. 
     * @param value Value to set for the msdyn_botid property.
     */
    public set msdyn_botid(value: string | undefined) {
        this._msdyn_botid = value;
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
     * Gets the msdyn_octeamschannelconfig_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_octeamschannelconfig_AsyncOperations() {
        return this._msdyn_octeamschannelconfig_AsyncOperations;
    };
    /**
     * Sets the msdyn_octeamschannelconfig_AsyncOperations property value. 
     * @param value Value to set for the msdyn_octeamschannelconfig_AsyncOperations property.
     */
    public set msdyn_octeamschannelconfig_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_octeamschannelconfig_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_octeamschannelconfig_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_octeamschannelconfig_BulkDeleteFailures() {
        return this._msdyn_octeamschannelconfig_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_octeamschannelconfig_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_octeamschannelconfig_BulkDeleteFailures property.
     */
    public set msdyn_octeamschannelconfig_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_octeamschannelconfig_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_octeamschannelconfig_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_octeamschannelconfig_DuplicateBaseRecord() {
        return this._msdyn_octeamschannelconfig_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_octeamschannelconfig_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_octeamschannelconfig_DuplicateBaseRecord property.
     */
    public set msdyn_octeamschannelconfig_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_octeamschannelconfig_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_octeamschannelconfig_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_octeamschannelconfig_DuplicateMatchingRecord() {
        return this._msdyn_octeamschannelconfig_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_octeamschannelconfig_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_octeamschannelconfig_DuplicateMatchingRecord property.
     */
    public set msdyn_octeamschannelconfig_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_octeamschannelconfig_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_octeamschannelconfig_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_octeamschannelconfig_MailboxTrackingFolders() {
        return this._msdyn_octeamschannelconfig_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_octeamschannelconfig_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_octeamschannelconfig_MailboxTrackingFolders property.
     */
    public set msdyn_octeamschannelconfig_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_octeamschannelconfig_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_octeamschannelconfig_msdyn_ocbotchannelregistration_msdyn_octeamschannelconfigid property value. 
     * @returns a msdyn_ocbotchannelregistration
     */
    public get msdyn_octeamschannelconfig_msdyn_ocbotchannelregistration_msdyn_octeamschannelconfigid() {
        return this._msdyn_octeamschannelconfig_msdyn_ocbotchannelregistration_msdyn_octeamschannelconfigid;
    };
    /**
     * Sets the msdyn_octeamschannelconfig_msdyn_ocbotchannelregistration_msdyn_octeamschannelconfigid property value. 
     * @param value Value to set for the msdyn_octeamschannelconfig_msdyn_ocbotchannelregistration_msdyn_octeamschannelconfigid property.
     */
    public set msdyn_octeamschannelconfig_msdyn_ocbotchannelregistration_msdyn_octeamschannelconfigid(value: Msdyn_ocbotchannelregistration[] | undefined) {
        this._msdyn_octeamschannelconfig_msdyn_ocbotchannelregistration_msdyn_octeamschannelconfigid = value;
    };
    /**
     * Gets the msdyn_octeamschannelconfig_msdyn_ocprovisioningstate_octeamschannelconfigid property value. 
     * @returns a msdyn_ocprovisioningstate
     */
    public get msdyn_octeamschannelconfig_msdyn_ocprovisioningstate_octeamschannelconfigid() {
        return this._msdyn_octeamschannelconfig_msdyn_ocprovisioningstate_octeamschannelconfigid;
    };
    /**
     * Sets the msdyn_octeamschannelconfig_msdyn_ocprovisioningstate_octeamschannelconfigid property value. 
     * @param value Value to set for the msdyn_octeamschannelconfig_msdyn_ocprovisioningstate_octeamschannelconfigid property.
     */
    public set msdyn_octeamschannelconfig_msdyn_ocprovisioningstate_octeamschannelconfigid(value: Msdyn_ocprovisioningstate[] | undefined) {
        this._msdyn_octeamschannelconfig_msdyn_ocprovisioningstate_octeamschannelconfigid = value;
    };
    /**
     * Gets the msdyn_octeamschannelconfig_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_octeamschannelconfig_PrincipalObjectAttributeAccesses() {
        return this._msdyn_octeamschannelconfig_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_octeamschannelconfig_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_octeamschannelconfig_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_octeamschannelconfig_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_octeamschannelconfig_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_octeamschannelconfig_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_octeamschannelconfig_ProcessSession() {
        return this._msdyn_octeamschannelconfig_ProcessSession;
    };
    /**
     * Sets the msdyn_octeamschannelconfig_ProcessSession property value. 
     * @param value Value to set for the msdyn_octeamschannelconfig_ProcessSession property.
     */
    public set msdyn_octeamschannelconfig_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_octeamschannelconfig_ProcessSession = value;
    };
    /**
     * Gets the msdyn_octeamschannelconfig_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_octeamschannelconfig_SyncErrors() {
        return this._msdyn_octeamschannelconfig_SyncErrors;
    };
    /**
     * Sets the msdyn_octeamschannelconfig_SyncErrors property value. 
     * @param value Value to set for the msdyn_octeamschannelconfig_SyncErrors property.
     */
    public set msdyn_octeamschannelconfig_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_octeamschannelconfig_SyncErrors = value;
    };
    /**
     * Gets the msdyn_octeamschannelconfigid property value. 
     * @returns a string
     */
    public get msdyn_octeamschannelconfigid() {
        return this._msdyn_octeamschannelconfigid;
    };
    /**
     * Sets the msdyn_octeamschannelconfigid property value. 
     * @param value Value to set for the msdyn_octeamschannelconfigid property.
     */
    public set msdyn_octeamschannelconfigid(value: string | undefined) {
        this._msdyn_octeamschannelconfigid = value;
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
     * Gets the msdyn_teamsappname property value. 
     * @returns a string
     */
    public get msdyn_teamsappname() {
        return this._msdyn_teamsappname;
    };
    /**
     * Sets the msdyn_teamsappname property value. 
     * @param value Value to set for the msdyn_teamsappname property.
     */
    public set msdyn_teamsappname(value: string | undefined) {
        this._msdyn_teamsappname = value;
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
        writer.writeStringValue("msdyn_botid", this.msdyn_botid);
        writer.writeBooleanValue("msdyn_enablefileattachmentsforagents", this.msdyn_enablefileattachmentsforagents);
        writer.writeBooleanValue("msdyn_enablefileattachmentsforcustomers", this.msdyn_enablefileattachmentsforcustomers);
        writer.writeObjectValue<Msdyn_liveworkstream>("msdyn_liveworkstreamid", this.msdyn_liveworkstreamid);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_octeamschannelconfig_AsyncOperations", this.msdyn_octeamschannelconfig_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_octeamschannelconfig_BulkDeleteFailures", this.msdyn_octeamschannelconfig_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_octeamschannelconfig_DuplicateBaseRecord", this.msdyn_octeamschannelconfig_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_octeamschannelconfig_DuplicateMatchingRecord", this.msdyn_octeamschannelconfig_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_octeamschannelconfig_MailboxTrackingFolders", this.msdyn_octeamschannelconfig_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_ocbotchannelregistration>("msdyn_octeamschannelconfig_msdyn_ocbotchannelregistration_msdyn_octeamschannelconfigid", this.msdyn_octeamschannelconfig_msdyn_ocbotchannelregistration_msdyn_octeamschannelconfigid);
        writer.writeCollectionOfObjectValues<Msdyn_ocprovisioningstate>("msdyn_octeamschannelconfig_msdyn_ocprovisioningstate_octeamschannelconfigid", this.msdyn_octeamschannelconfig_msdyn_ocprovisioningstate_octeamschannelconfigid);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_octeamschannelconfig_PrincipalObjectAttributeAccesses", this.msdyn_octeamschannelconfig_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_octeamschannelconfig_ProcessSession", this.msdyn_octeamschannelconfig_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_octeamschannelconfig_SyncErrors", this.msdyn_octeamschannelconfig_SyncErrors);
        writer.writeStringValue("msdyn_octeamschannelconfigid", this.msdyn_octeamschannelconfigid);
        writer.writeObjectValue<Msdyn_oclanguage>("msdyn_ocwidgetlanguage", this.msdyn_ocwidgetlanguage);
        writer.writeObjectValue<Msfp_survey>("msdyn_PostConversationSurvey", this.msdyn_PostConversationSurvey);
        writer.writeBooleanValue("msdyn_postconversationsurveyenable", this.msdyn_postconversationsurveyenable);
        writer.writeStringValue("msdyn_postconversationsurveymessagetext", this.msdyn_postconversationsurveymessagetext);
        writer.writeNumberValue("msdyn_postconversationsurveymode", this.msdyn_postconversationsurveymode);
        writer.writeStringValue("msdyn_teamsappname", this.msdyn_teamsappname);
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
