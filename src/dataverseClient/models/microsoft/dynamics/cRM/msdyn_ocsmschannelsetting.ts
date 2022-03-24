import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_liveworkstreamFromDiscriminatorValue} from './createMsdyn_liveworkstreamFromDiscriminatorValue';
import {createMsdyn_oclanguageFromDiscriminatorValue} from './createMsdyn_oclanguageFromDiscriminatorValue';
import {createMsdyn_ocphonenumberFromDiscriminatorValue} from './createMsdyn_ocphonenumberFromDiscriminatorValue';
import {createMsdyn_operatinghourFromDiscriminatorValue} from './createMsdyn_operatinghourFromDiscriminatorValue';
import {createMsfp_surveyFromDiscriminatorValue} from './createMsfp_surveyFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_liveworkstream, Msdyn_oclanguage, Msdyn_ocphonenumber, Msdyn_operatinghour, Msfp_survey, Organization, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_ocsmschannelsetting extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_language_value?: string | undefined;
    private __msdyn_liveworkstreamid_value?: string | undefined;
    private __msdyn_operatinghourid_value?: string | undefined;
    private __msdyn_phonenumberid_value?: string | undefined;
    private __msdyn_postconversationsurvey_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_enablefileattachmentforagents?: boolean | undefined;
    private _msdyn_enablefileattachmentforcustomers?: boolean | undefined;
    private _msdyn_inboundurl?: string | undefined;
    private _msdyn_language?: Msdyn_oclanguage | undefined;
    private _msdyn_liveworkstreamid?: Msdyn_liveworkstream | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_ocsmschannelsetting_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_ocsmschannelsetting_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_ocsmschannelsetting_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_ocsmschannelsetting_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_ocsmschannelsetting_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_ocsmschannelsetting_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_ocsmschannelsetting_ProcessSession?: Processsession[] | undefined;
    private _msdyn_ocsmschannelsetting_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_ocsmschannelsettingid?: string | undefined;
    private _msdyn_operatinghourid?: Msdyn_operatinghour | undefined;
    private _msdyn_PhoneNumberId?: Msdyn_ocphonenumber | undefined;
    private _msdyn_postconversationsurvey?: Msfp_survey | undefined;
    private _msdyn_postconversationsurveyenable?: boolean | undefined;
    private _msdyn_postconversationsurveymessagetext?: string | undefined;
    private _msdyn_postconversationsurveymode?: number | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
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
     * Gets the _msdyn_language_value property value. 
     * @returns a string
     */
    public get _msdyn_language_value() {
        return this.__msdyn_language_value;
    };
    /**
     * Sets the _msdyn_language_value property value. 
     * @param value Value to set for the _msdyn_language_value property.
     */
    public set _msdyn_language_value(value: string | undefined) {
        this.__msdyn_language_value = value;
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
     * Gets the _msdyn_operatinghourid_value property value. 
     * @returns a string
     */
    public get _msdyn_operatinghourid_value() {
        return this.__msdyn_operatinghourid_value;
    };
    /**
     * Sets the _msdyn_operatinghourid_value property value. 
     * @param value Value to set for the _msdyn_operatinghourid_value property.
     */
    public set _msdyn_operatinghourid_value(value: string | undefined) {
        this.__msdyn_operatinghourid_value = value;
    };
    /**
     * Gets the _msdyn_phonenumberid_value property value. 
     * @returns a string
     */
    public get _msdyn_phonenumberid_value() {
        return this.__msdyn_phonenumberid_value;
    };
    /**
     * Sets the _msdyn_phonenumberid_value property value. 
     * @param value Value to set for the _msdyn_phonenumberid_value property.
     */
    public set _msdyn_phonenumberid_value(value: string | undefined) {
        this.__msdyn_phonenumberid_value = value;
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
     * Gets the _organizationid_value property value. 
     * @returns a string
     */
    public get _organizationid_value() {
        return this.__organizationid_value;
    };
    /**
     * Sets the _organizationid_value property value. 
     * @param value Value to set for the _organizationid_value property.
     */
    public set _organizationid_value(value: string | undefined) {
        this.__organizationid_value = value;
    };
    /**
     * Instantiates a new msdyn_ocsmschannelsetting and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_ocsmschannelsetting)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_ocsmschannelsetting)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_ocsmschannelsetting)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_ocsmschannelsetting)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_language_value": (o, n) => { (o as unknown as Msdyn_ocsmschannelsetting)._msdyn_language_value = n.getStringValue(); },
            "_msdyn_liveworkstreamid_value": (o, n) => { (o as unknown as Msdyn_ocsmschannelsetting)._msdyn_liveworkstreamid_value = n.getStringValue(); },
            "_msdyn_operatinghourid_value": (o, n) => { (o as unknown as Msdyn_ocsmschannelsetting)._msdyn_operatinghourid_value = n.getStringValue(); },
            "_msdyn_phonenumberid_value": (o, n) => { (o as unknown as Msdyn_ocsmschannelsetting)._msdyn_phonenumberid_value = n.getStringValue(); },
            "_msdyn_postconversationsurvey_value": (o, n) => { (o as unknown as Msdyn_ocsmschannelsetting)._msdyn_postconversationsurvey_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_ocsmschannelsetting)._organizationid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_ocsmschannelsetting).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_ocsmschannelsetting).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_ocsmschannelsetting).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_ocsmschannelsetting).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_ocsmschannelsetting).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_ocsmschannelsetting).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_ocsmschannelsetting).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_enablefileattachmentforagents": (o, n) => { (o as unknown as Msdyn_ocsmschannelsetting).msdyn_enablefileattachmentforagents = n.getBooleanValue(); },
            "msdyn_enablefileattachmentforcustomers": (o, n) => { (o as unknown as Msdyn_ocsmschannelsetting).msdyn_enablefileattachmentforcustomers = n.getBooleanValue(); },
            "msdyn_inboundurl": (o, n) => { (o as unknown as Msdyn_ocsmschannelsetting).msdyn_inboundurl = n.getStringValue(); },
            "msdyn_language": (o, n) => { (o as unknown as Msdyn_ocsmschannelsetting).msdyn_language = n.getObjectValue<Msdyn_oclanguage>(createMsdyn_oclanguageFromDiscriminatorValue); },
            "msdyn_liveworkstreamid": (o, n) => { (o as unknown as Msdyn_ocsmschannelsetting).msdyn_liveworkstreamid = n.getObjectValue<Msdyn_liveworkstream>(createMsdyn_liveworkstreamFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_ocsmschannelsetting).msdyn_name = n.getStringValue(); },
            "msdyn_ocsmschannelsetting_AsyncOperations": (o, n) => { (o as unknown as Msdyn_ocsmschannelsetting).msdyn_ocsmschannelsetting_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_ocsmschannelsetting_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_ocsmschannelsetting).msdyn_ocsmschannelsetting_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_ocsmschannelsetting_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_ocsmschannelsetting).msdyn_ocsmschannelsetting_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_ocsmschannelsetting_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_ocsmschannelsetting).msdyn_ocsmschannelsetting_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_ocsmschannelsetting_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_ocsmschannelsetting).msdyn_ocsmschannelsetting_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_ocsmschannelsetting_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_ocsmschannelsetting).msdyn_ocsmschannelsetting_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_ocsmschannelsetting_ProcessSession": (o, n) => { (o as unknown as Msdyn_ocsmschannelsetting).msdyn_ocsmschannelsetting_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_ocsmschannelsetting_SyncErrors": (o, n) => { (o as unknown as Msdyn_ocsmschannelsetting).msdyn_ocsmschannelsetting_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_ocsmschannelsettingid": (o, n) => { (o as unknown as Msdyn_ocsmschannelsetting).msdyn_ocsmschannelsettingid = n.getStringValue(); },
            "msdyn_operatinghourid": (o, n) => { (o as unknown as Msdyn_ocsmschannelsetting).msdyn_operatinghourid = n.getObjectValue<Msdyn_operatinghour>(createMsdyn_operatinghourFromDiscriminatorValue); },
            "msdyn_PhoneNumberId": (o, n) => { (o as unknown as Msdyn_ocsmschannelsetting).msdyn_PhoneNumberId = n.getObjectValue<Msdyn_ocphonenumber>(createMsdyn_ocphonenumberFromDiscriminatorValue); },
            "msdyn_postconversationsurvey": (o, n) => { (o as unknown as Msdyn_ocsmschannelsetting).msdyn_postconversationsurvey = n.getObjectValue<Msfp_survey>(createMsfp_surveyFromDiscriminatorValue); },
            "msdyn_postconversationsurveyenable": (o, n) => { (o as unknown as Msdyn_ocsmschannelsetting).msdyn_postconversationsurveyenable = n.getBooleanValue(); },
            "msdyn_postconversationsurveymessagetext": (o, n) => { (o as unknown as Msdyn_ocsmschannelsetting).msdyn_postconversationsurveymessagetext = n.getStringValue(); },
            "msdyn_postconversationsurveymode": (o, n) => { (o as unknown as Msdyn_ocsmschannelsetting).msdyn_postconversationsurveymode = n.getNumberValue(); },
            "organizationid": (o, n) => { (o as unknown as Msdyn_ocsmschannelsetting).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_ocsmschannelsetting).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_ocsmschannelsetting).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_ocsmschannelsetting).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_ocsmschannelsetting).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_ocsmschannelsetting).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_ocsmschannelsetting).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_enablefileattachmentforagents property value. 
     * @returns a boolean
     */
    public get msdyn_enablefileattachmentforagents() {
        return this._msdyn_enablefileattachmentforagents;
    };
    /**
     * Sets the msdyn_enablefileattachmentforagents property value. 
     * @param value Value to set for the msdyn_enablefileattachmentforagents property.
     */
    public set msdyn_enablefileattachmentforagents(value: boolean | undefined) {
        this._msdyn_enablefileattachmentforagents = value;
    };
    /**
     * Gets the msdyn_enablefileattachmentforcustomers property value. 
     * @returns a boolean
     */
    public get msdyn_enablefileattachmentforcustomers() {
        return this._msdyn_enablefileattachmentforcustomers;
    };
    /**
     * Sets the msdyn_enablefileattachmentforcustomers property value. 
     * @param value Value to set for the msdyn_enablefileattachmentforcustomers property.
     */
    public set msdyn_enablefileattachmentforcustomers(value: boolean | undefined) {
        this._msdyn_enablefileattachmentforcustomers = value;
    };
    /**
     * Gets the msdyn_inboundurl property value. 
     * @returns a string
     */
    public get msdyn_inboundurl() {
        return this._msdyn_inboundurl;
    };
    /**
     * Sets the msdyn_inboundurl property value. 
     * @param value Value to set for the msdyn_inboundurl property.
     */
    public set msdyn_inboundurl(value: string | undefined) {
        this._msdyn_inboundurl = value;
    };
    /**
     * Gets the msdyn_language property value. 
     * @returns a msdyn_oclanguage
     */
    public get msdyn_language() {
        return this._msdyn_language;
    };
    /**
     * Sets the msdyn_language property value. 
     * @param value Value to set for the msdyn_language property.
     */
    public set msdyn_language(value: Msdyn_oclanguage | undefined) {
        this._msdyn_language = value;
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
     * Gets the msdyn_ocsmschannelsetting_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_ocsmschannelsetting_AsyncOperations() {
        return this._msdyn_ocsmschannelsetting_AsyncOperations;
    };
    /**
     * Sets the msdyn_ocsmschannelsetting_AsyncOperations property value. 
     * @param value Value to set for the msdyn_ocsmschannelsetting_AsyncOperations property.
     */
    public set msdyn_ocsmschannelsetting_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_ocsmschannelsetting_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_ocsmschannelsetting_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_ocsmschannelsetting_BulkDeleteFailures() {
        return this._msdyn_ocsmschannelsetting_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_ocsmschannelsetting_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_ocsmschannelsetting_BulkDeleteFailures property.
     */
    public set msdyn_ocsmschannelsetting_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_ocsmschannelsetting_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_ocsmschannelsetting_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_ocsmschannelsetting_DuplicateBaseRecord() {
        return this._msdyn_ocsmschannelsetting_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_ocsmschannelsetting_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_ocsmschannelsetting_DuplicateBaseRecord property.
     */
    public set msdyn_ocsmschannelsetting_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_ocsmschannelsetting_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_ocsmschannelsetting_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_ocsmschannelsetting_DuplicateMatchingRecord() {
        return this._msdyn_ocsmschannelsetting_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_ocsmschannelsetting_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_ocsmschannelsetting_DuplicateMatchingRecord property.
     */
    public set msdyn_ocsmschannelsetting_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_ocsmschannelsetting_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_ocsmschannelsetting_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_ocsmschannelsetting_MailboxTrackingFolders() {
        return this._msdyn_ocsmschannelsetting_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_ocsmschannelsetting_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_ocsmschannelsetting_MailboxTrackingFolders property.
     */
    public set msdyn_ocsmschannelsetting_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_ocsmschannelsetting_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_ocsmschannelsetting_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_ocsmschannelsetting_PrincipalObjectAttributeAccesses() {
        return this._msdyn_ocsmschannelsetting_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_ocsmschannelsetting_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_ocsmschannelsetting_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_ocsmschannelsetting_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_ocsmschannelsetting_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_ocsmschannelsetting_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_ocsmschannelsetting_ProcessSession() {
        return this._msdyn_ocsmschannelsetting_ProcessSession;
    };
    /**
     * Sets the msdyn_ocsmschannelsetting_ProcessSession property value. 
     * @param value Value to set for the msdyn_ocsmschannelsetting_ProcessSession property.
     */
    public set msdyn_ocsmschannelsetting_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_ocsmschannelsetting_ProcessSession = value;
    };
    /**
     * Gets the msdyn_ocsmschannelsetting_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_ocsmschannelsetting_SyncErrors() {
        return this._msdyn_ocsmschannelsetting_SyncErrors;
    };
    /**
     * Sets the msdyn_ocsmschannelsetting_SyncErrors property value. 
     * @param value Value to set for the msdyn_ocsmschannelsetting_SyncErrors property.
     */
    public set msdyn_ocsmschannelsetting_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_ocsmschannelsetting_SyncErrors = value;
    };
    /**
     * Gets the msdyn_ocsmschannelsettingid property value. 
     * @returns a string
     */
    public get msdyn_ocsmschannelsettingid() {
        return this._msdyn_ocsmschannelsettingid;
    };
    /**
     * Sets the msdyn_ocsmschannelsettingid property value. 
     * @param value Value to set for the msdyn_ocsmschannelsettingid property.
     */
    public set msdyn_ocsmschannelsettingid(value: string | undefined) {
        this._msdyn_ocsmschannelsettingid = value;
    };
    /**
     * Gets the msdyn_operatinghourid property value. 
     * @returns a msdyn_operatinghour
     */
    public get msdyn_operatinghourid() {
        return this._msdyn_operatinghourid;
    };
    /**
     * Sets the msdyn_operatinghourid property value. 
     * @param value Value to set for the msdyn_operatinghourid property.
     */
    public set msdyn_operatinghourid(value: Msdyn_operatinghour | undefined) {
        this._msdyn_operatinghourid = value;
    };
    /**
     * Gets the msdyn_PhoneNumberId property value. 
     * @returns a msdyn_ocphonenumber
     */
    public get msdyn_PhoneNumberId() {
        return this._msdyn_PhoneNumberId;
    };
    /**
     * Sets the msdyn_PhoneNumberId property value. 
     * @param value Value to set for the msdyn_PhoneNumberId property.
     */
    public set msdyn_PhoneNumberId(value: Msdyn_ocphonenumber | undefined) {
        this._msdyn_PhoneNumberId = value;
    };
    /**
     * Gets the msdyn_postconversationsurvey property value. 
     * @returns a msfp_survey
     */
    public get msdyn_postconversationsurvey() {
        return this._msdyn_postconversationsurvey;
    };
    /**
     * Sets the msdyn_postconversationsurvey property value. 
     * @param value Value to set for the msdyn_postconversationsurvey property.
     */
    public set msdyn_postconversationsurvey(value: Msfp_survey | undefined) {
        this._msdyn_postconversationsurvey = value;
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
     * Gets the organizationid property value. 
     * @returns a organization
     */
    public get organizationid() {
        return this._organizationid;
    };
    /**
     * Sets the organizationid property value. 
     * @param value Value to set for the organizationid property.
     */
    public set organizationid(value: Organization | undefined) {
        this._organizationid = value;
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
        writer.writeStringValue("_msdyn_language_value", this._msdyn_language_value);
        writer.writeStringValue("_msdyn_liveworkstreamid_value", this._msdyn_liveworkstreamid_value);
        writer.writeStringValue("_msdyn_operatinghourid_value", this._msdyn_operatinghourid_value);
        writer.writeStringValue("_msdyn_phonenumberid_value", this._msdyn_phonenumberid_value);
        writer.writeStringValue("_msdyn_postconversationsurvey_value", this._msdyn_postconversationsurvey_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeBooleanValue("msdyn_enablefileattachmentforagents", this.msdyn_enablefileattachmentforagents);
        writer.writeBooleanValue("msdyn_enablefileattachmentforcustomers", this.msdyn_enablefileattachmentforcustomers);
        writer.writeStringValue("msdyn_inboundurl", this.msdyn_inboundurl);
        writer.writeObjectValue<Msdyn_oclanguage>("msdyn_language", this.msdyn_language);
        writer.writeObjectValue<Msdyn_liveworkstream>("msdyn_liveworkstreamid", this.msdyn_liveworkstreamid);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_ocsmschannelsetting_AsyncOperations", this.msdyn_ocsmschannelsetting_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_ocsmschannelsetting_BulkDeleteFailures", this.msdyn_ocsmschannelsetting_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_ocsmschannelsetting_DuplicateBaseRecord", this.msdyn_ocsmschannelsetting_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_ocsmschannelsetting_DuplicateMatchingRecord", this.msdyn_ocsmschannelsetting_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_ocsmschannelsetting_MailboxTrackingFolders", this.msdyn_ocsmschannelsetting_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_ocsmschannelsetting_PrincipalObjectAttributeAccesses", this.msdyn_ocsmschannelsetting_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_ocsmschannelsetting_ProcessSession", this.msdyn_ocsmschannelsetting_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_ocsmschannelsetting_SyncErrors", this.msdyn_ocsmschannelsetting_SyncErrors);
        writer.writeStringValue("msdyn_ocsmschannelsettingid", this.msdyn_ocsmschannelsettingid);
        writer.writeObjectValue<Msdyn_operatinghour>("msdyn_operatinghourid", this.msdyn_operatinghourid);
        writer.writeObjectValue<Msdyn_ocphonenumber>("msdyn_PhoneNumberId", this.msdyn_PhoneNumberId);
        writer.writeObjectValue<Msfp_survey>("msdyn_postconversationsurvey", this.msdyn_postconversationsurvey);
        writer.writeBooleanValue("msdyn_postconversationsurveyenable", this.msdyn_postconversationsurveyenable);
        writer.writeStringValue("msdyn_postconversationsurveymessagetext", this.msdyn_postconversationsurveymessagetext);
        writer.writeNumberValue("msdyn_postconversationsurveymode", this.msdyn_postconversationsurveymode);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
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
