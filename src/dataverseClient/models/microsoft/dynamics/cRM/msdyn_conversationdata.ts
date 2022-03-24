import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_conversationdata extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
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
    private _msdyn_accountid?: string | undefined;
    private _msdyn_additionaldata?: string | undefined;
    private _msdyn_channel?: string | undefined;
    private _msdyn_contactid?: string | undefined;
    private _msdyn_conversationdata_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_conversationdata_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_conversationdata_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_conversationdata_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_conversationdata_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_conversationdata_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_conversationdata_ProcessSession?: Processsession[] | undefined;
    private _msdyn_conversationdata_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_conversationdataid?: string | undefined;
    private _msdyn_conversationid?: string | undefined;
    private _msdyn_conversationtimestamp?: Date | undefined;
    private _msdyn_customattribute1?: string | undefined;
    private _msdyn_customattribute2?: string | undefined;
    private _msdyn_customattribute3?: string | undefined;
    private _msdyn_customattribute4?: string | undefined;
    private _msdyn_customattribute5?: string | undefined;
    private _msdyn_customercity?: string | undefined;
    private _msdyn_customercountry?: string | undefined;
    private _msdyn_customerstate?: string | undefined;
    private _msdyn_customerzip?: string | undefined;
    private _msdyn_externalcorrelationid?: string | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_primaryrelatedentityname?: string | undefined;
    private _msdyn_primaryrelatedentityrecordid?: string | undefined;
    private _msdyn_providerid?: string | undefined;
    private _msdyn_providername?: string | undefined;
    private _msdyn_region?: string | undefined;
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
     * Instantiates a new msdyn_conversationdata and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_conversationdata)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_conversationdata)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_conversationdata)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_conversationdata)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_conversationdata)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_conversationdata)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_conversationdata)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_conversationdata)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_conversationdata).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_conversationdata).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_conversationdata).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_conversationdata).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_conversationdata).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_conversationdata).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_conversationdata).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_accountid": (o, n) => { (o as unknown as Msdyn_conversationdata).msdyn_accountid = n.getStringValue(); },
            "msdyn_additionaldata": (o, n) => { (o as unknown as Msdyn_conversationdata).msdyn_additionaldata = n.getStringValue(); },
            "msdyn_channel": (o, n) => { (o as unknown as Msdyn_conversationdata).msdyn_channel = n.getStringValue(); },
            "msdyn_contactid": (o, n) => { (o as unknown as Msdyn_conversationdata).msdyn_contactid = n.getStringValue(); },
            "msdyn_conversationdata_AsyncOperations": (o, n) => { (o as unknown as Msdyn_conversationdata).msdyn_conversationdata_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_conversationdata_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_conversationdata).msdyn_conversationdata_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_conversationdata_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_conversationdata).msdyn_conversationdata_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_conversationdata_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_conversationdata).msdyn_conversationdata_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_conversationdata_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_conversationdata).msdyn_conversationdata_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_conversationdata_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_conversationdata).msdyn_conversationdata_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_conversationdata_ProcessSession": (o, n) => { (o as unknown as Msdyn_conversationdata).msdyn_conversationdata_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_conversationdata_SyncErrors": (o, n) => { (o as unknown as Msdyn_conversationdata).msdyn_conversationdata_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_conversationdataid": (o, n) => { (o as unknown as Msdyn_conversationdata).msdyn_conversationdataid = n.getStringValue(); },
            "msdyn_conversationid": (o, n) => { (o as unknown as Msdyn_conversationdata).msdyn_conversationid = n.getStringValue(); },
            "msdyn_conversationtimestamp": (o, n) => { (o as unknown as Msdyn_conversationdata).msdyn_conversationtimestamp = n.getDateValue(); },
            "msdyn_customattribute1": (o, n) => { (o as unknown as Msdyn_conversationdata).msdyn_customattribute1 = n.getStringValue(); },
            "msdyn_customattribute2": (o, n) => { (o as unknown as Msdyn_conversationdata).msdyn_customattribute2 = n.getStringValue(); },
            "msdyn_customattribute3": (o, n) => { (o as unknown as Msdyn_conversationdata).msdyn_customattribute3 = n.getStringValue(); },
            "msdyn_customattribute4": (o, n) => { (o as unknown as Msdyn_conversationdata).msdyn_customattribute4 = n.getStringValue(); },
            "msdyn_customattribute5": (o, n) => { (o as unknown as Msdyn_conversationdata).msdyn_customattribute5 = n.getStringValue(); },
            "msdyn_customercity": (o, n) => { (o as unknown as Msdyn_conversationdata).msdyn_customercity = n.getStringValue(); },
            "msdyn_customercountry": (o, n) => { (o as unknown as Msdyn_conversationdata).msdyn_customercountry = n.getStringValue(); },
            "msdyn_customerstate": (o, n) => { (o as unknown as Msdyn_conversationdata).msdyn_customerstate = n.getStringValue(); },
            "msdyn_customerzip": (o, n) => { (o as unknown as Msdyn_conversationdata).msdyn_customerzip = n.getStringValue(); },
            "msdyn_externalcorrelationid": (o, n) => { (o as unknown as Msdyn_conversationdata).msdyn_externalcorrelationid = n.getStringValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_conversationdata).msdyn_name = n.getStringValue(); },
            "msdyn_primaryrelatedentityname": (o, n) => { (o as unknown as Msdyn_conversationdata).msdyn_primaryrelatedentityname = n.getStringValue(); },
            "msdyn_primaryrelatedentityrecordid": (o, n) => { (o as unknown as Msdyn_conversationdata).msdyn_primaryrelatedentityrecordid = n.getStringValue(); },
            "msdyn_providerid": (o, n) => { (o as unknown as Msdyn_conversationdata).msdyn_providerid = n.getStringValue(); },
            "msdyn_providername": (o, n) => { (o as unknown as Msdyn_conversationdata).msdyn_providername = n.getStringValue(); },
            "msdyn_region": (o, n) => { (o as unknown as Msdyn_conversationdata).msdyn_region = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_conversationdata).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_conversationdata).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_conversationdata).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_conversationdata).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_conversationdata).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_conversationdata).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_conversationdata).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_conversationdata).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_conversationdata).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_conversationdata).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_accountid property value. 
     * @returns a string
     */
    public get msdyn_accountid() {
        return this._msdyn_accountid;
    };
    /**
     * Sets the msdyn_accountid property value. 
     * @param value Value to set for the msdyn_accountid property.
     */
    public set msdyn_accountid(value: string | undefined) {
        this._msdyn_accountid = value;
    };
    /**
     * Gets the msdyn_additionaldata property value. 
     * @returns a string
     */
    public get msdyn_additionaldata() {
        return this._msdyn_additionaldata;
    };
    /**
     * Sets the msdyn_additionaldata property value. 
     * @param value Value to set for the msdyn_additionaldata property.
     */
    public set msdyn_additionaldata(value: string | undefined) {
        this._msdyn_additionaldata = value;
    };
    /**
     * Gets the msdyn_channel property value. 
     * @returns a string
     */
    public get msdyn_channel() {
        return this._msdyn_channel;
    };
    /**
     * Sets the msdyn_channel property value. 
     * @param value Value to set for the msdyn_channel property.
     */
    public set msdyn_channel(value: string | undefined) {
        this._msdyn_channel = value;
    };
    /**
     * Gets the msdyn_contactid property value. 
     * @returns a string
     */
    public get msdyn_contactid() {
        return this._msdyn_contactid;
    };
    /**
     * Sets the msdyn_contactid property value. 
     * @param value Value to set for the msdyn_contactid property.
     */
    public set msdyn_contactid(value: string | undefined) {
        this._msdyn_contactid = value;
    };
    /**
     * Gets the msdyn_conversationdata_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_conversationdata_AsyncOperations() {
        return this._msdyn_conversationdata_AsyncOperations;
    };
    /**
     * Sets the msdyn_conversationdata_AsyncOperations property value. 
     * @param value Value to set for the msdyn_conversationdata_AsyncOperations property.
     */
    public set msdyn_conversationdata_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_conversationdata_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_conversationdata_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_conversationdata_BulkDeleteFailures() {
        return this._msdyn_conversationdata_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_conversationdata_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_conversationdata_BulkDeleteFailures property.
     */
    public set msdyn_conversationdata_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_conversationdata_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_conversationdata_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_conversationdata_DuplicateBaseRecord() {
        return this._msdyn_conversationdata_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_conversationdata_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_conversationdata_DuplicateBaseRecord property.
     */
    public set msdyn_conversationdata_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_conversationdata_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_conversationdata_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_conversationdata_DuplicateMatchingRecord() {
        return this._msdyn_conversationdata_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_conversationdata_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_conversationdata_DuplicateMatchingRecord property.
     */
    public set msdyn_conversationdata_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_conversationdata_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_conversationdata_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_conversationdata_MailboxTrackingFolders() {
        return this._msdyn_conversationdata_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_conversationdata_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_conversationdata_MailboxTrackingFolders property.
     */
    public set msdyn_conversationdata_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_conversationdata_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_conversationdata_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_conversationdata_PrincipalObjectAttributeAccesses() {
        return this._msdyn_conversationdata_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_conversationdata_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_conversationdata_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_conversationdata_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_conversationdata_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_conversationdata_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_conversationdata_ProcessSession() {
        return this._msdyn_conversationdata_ProcessSession;
    };
    /**
     * Sets the msdyn_conversationdata_ProcessSession property value. 
     * @param value Value to set for the msdyn_conversationdata_ProcessSession property.
     */
    public set msdyn_conversationdata_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_conversationdata_ProcessSession = value;
    };
    /**
     * Gets the msdyn_conversationdata_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_conversationdata_SyncErrors() {
        return this._msdyn_conversationdata_SyncErrors;
    };
    /**
     * Sets the msdyn_conversationdata_SyncErrors property value. 
     * @param value Value to set for the msdyn_conversationdata_SyncErrors property.
     */
    public set msdyn_conversationdata_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_conversationdata_SyncErrors = value;
    };
    /**
     * Gets the msdyn_conversationdataid property value. 
     * @returns a string
     */
    public get msdyn_conversationdataid() {
        return this._msdyn_conversationdataid;
    };
    /**
     * Sets the msdyn_conversationdataid property value. 
     * @param value Value to set for the msdyn_conversationdataid property.
     */
    public set msdyn_conversationdataid(value: string | undefined) {
        this._msdyn_conversationdataid = value;
    };
    /**
     * Gets the msdyn_conversationid property value. 
     * @returns a string
     */
    public get msdyn_conversationid() {
        return this._msdyn_conversationid;
    };
    /**
     * Sets the msdyn_conversationid property value. 
     * @param value Value to set for the msdyn_conversationid property.
     */
    public set msdyn_conversationid(value: string | undefined) {
        this._msdyn_conversationid = value;
    };
    /**
     * Gets the msdyn_conversationtimestamp property value. 
     * @returns a Date
     */
    public get msdyn_conversationtimestamp() {
        return this._msdyn_conversationtimestamp;
    };
    /**
     * Sets the msdyn_conversationtimestamp property value. 
     * @param value Value to set for the msdyn_conversationtimestamp property.
     */
    public set msdyn_conversationtimestamp(value: Date | undefined) {
        this._msdyn_conversationtimestamp = value;
    };
    /**
     * Gets the msdyn_customattribute1 property value. 
     * @returns a string
     */
    public get msdyn_customattribute1() {
        return this._msdyn_customattribute1;
    };
    /**
     * Sets the msdyn_customattribute1 property value. 
     * @param value Value to set for the msdyn_customattribute1 property.
     */
    public set msdyn_customattribute1(value: string | undefined) {
        this._msdyn_customattribute1 = value;
    };
    /**
     * Gets the msdyn_customattribute2 property value. 
     * @returns a string
     */
    public get msdyn_customattribute2() {
        return this._msdyn_customattribute2;
    };
    /**
     * Sets the msdyn_customattribute2 property value. 
     * @param value Value to set for the msdyn_customattribute2 property.
     */
    public set msdyn_customattribute2(value: string | undefined) {
        this._msdyn_customattribute2 = value;
    };
    /**
     * Gets the msdyn_customattribute3 property value. 
     * @returns a string
     */
    public get msdyn_customattribute3() {
        return this._msdyn_customattribute3;
    };
    /**
     * Sets the msdyn_customattribute3 property value. 
     * @param value Value to set for the msdyn_customattribute3 property.
     */
    public set msdyn_customattribute3(value: string | undefined) {
        this._msdyn_customattribute3 = value;
    };
    /**
     * Gets the msdyn_customattribute4 property value. 
     * @returns a string
     */
    public get msdyn_customattribute4() {
        return this._msdyn_customattribute4;
    };
    /**
     * Sets the msdyn_customattribute4 property value. 
     * @param value Value to set for the msdyn_customattribute4 property.
     */
    public set msdyn_customattribute4(value: string | undefined) {
        this._msdyn_customattribute4 = value;
    };
    /**
     * Gets the msdyn_customattribute5 property value. 
     * @returns a string
     */
    public get msdyn_customattribute5() {
        return this._msdyn_customattribute5;
    };
    /**
     * Sets the msdyn_customattribute5 property value. 
     * @param value Value to set for the msdyn_customattribute5 property.
     */
    public set msdyn_customattribute5(value: string | undefined) {
        this._msdyn_customattribute5 = value;
    };
    /**
     * Gets the msdyn_customercity property value. 
     * @returns a string
     */
    public get msdyn_customercity() {
        return this._msdyn_customercity;
    };
    /**
     * Sets the msdyn_customercity property value. 
     * @param value Value to set for the msdyn_customercity property.
     */
    public set msdyn_customercity(value: string | undefined) {
        this._msdyn_customercity = value;
    };
    /**
     * Gets the msdyn_customercountry property value. 
     * @returns a string
     */
    public get msdyn_customercountry() {
        return this._msdyn_customercountry;
    };
    /**
     * Sets the msdyn_customercountry property value. 
     * @param value Value to set for the msdyn_customercountry property.
     */
    public set msdyn_customercountry(value: string | undefined) {
        this._msdyn_customercountry = value;
    };
    /**
     * Gets the msdyn_customerstate property value. 
     * @returns a string
     */
    public get msdyn_customerstate() {
        return this._msdyn_customerstate;
    };
    /**
     * Sets the msdyn_customerstate property value. 
     * @param value Value to set for the msdyn_customerstate property.
     */
    public set msdyn_customerstate(value: string | undefined) {
        this._msdyn_customerstate = value;
    };
    /**
     * Gets the msdyn_customerzip property value. 
     * @returns a string
     */
    public get msdyn_customerzip() {
        return this._msdyn_customerzip;
    };
    /**
     * Sets the msdyn_customerzip property value. 
     * @param value Value to set for the msdyn_customerzip property.
     */
    public set msdyn_customerzip(value: string | undefined) {
        this._msdyn_customerzip = value;
    };
    /**
     * Gets the msdyn_externalcorrelationid property value. 
     * @returns a string
     */
    public get msdyn_externalcorrelationid() {
        return this._msdyn_externalcorrelationid;
    };
    /**
     * Sets the msdyn_externalcorrelationid property value. 
     * @param value Value to set for the msdyn_externalcorrelationid property.
     */
    public set msdyn_externalcorrelationid(value: string | undefined) {
        this._msdyn_externalcorrelationid = value;
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
     * Gets the msdyn_primaryrelatedentityname property value. 
     * @returns a string
     */
    public get msdyn_primaryrelatedentityname() {
        return this._msdyn_primaryrelatedentityname;
    };
    /**
     * Sets the msdyn_primaryrelatedentityname property value. 
     * @param value Value to set for the msdyn_primaryrelatedentityname property.
     */
    public set msdyn_primaryrelatedentityname(value: string | undefined) {
        this._msdyn_primaryrelatedentityname = value;
    };
    /**
     * Gets the msdyn_primaryrelatedentityrecordid property value. 
     * @returns a string
     */
    public get msdyn_primaryrelatedentityrecordid() {
        return this._msdyn_primaryrelatedentityrecordid;
    };
    /**
     * Sets the msdyn_primaryrelatedentityrecordid property value. 
     * @param value Value to set for the msdyn_primaryrelatedentityrecordid property.
     */
    public set msdyn_primaryrelatedentityrecordid(value: string | undefined) {
        this._msdyn_primaryrelatedentityrecordid = value;
    };
    /**
     * Gets the msdyn_providerid property value. 
     * @returns a string
     */
    public get msdyn_providerid() {
        return this._msdyn_providerid;
    };
    /**
     * Sets the msdyn_providerid property value. 
     * @param value Value to set for the msdyn_providerid property.
     */
    public set msdyn_providerid(value: string | undefined) {
        this._msdyn_providerid = value;
    };
    /**
     * Gets the msdyn_providername property value. 
     * @returns a string
     */
    public get msdyn_providername() {
        return this._msdyn_providername;
    };
    /**
     * Sets the msdyn_providername property value. 
     * @param value Value to set for the msdyn_providername property.
     */
    public set msdyn_providername(value: string | undefined) {
        this._msdyn_providername = value;
    };
    /**
     * Gets the msdyn_region property value. 
     * @returns a string
     */
    public get msdyn_region() {
        return this._msdyn_region;
    };
    /**
     * Sets the msdyn_region property value. 
     * @param value Value to set for the msdyn_region property.
     */
    public set msdyn_region(value: string | undefined) {
        this._msdyn_region = value;
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
        writer.writeStringValue("msdyn_accountid", this.msdyn_accountid);
        writer.writeStringValue("msdyn_additionaldata", this.msdyn_additionaldata);
        writer.writeStringValue("msdyn_channel", this.msdyn_channel);
        writer.writeStringValue("msdyn_contactid", this.msdyn_contactid);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_conversationdata_AsyncOperations", this.msdyn_conversationdata_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_conversationdata_BulkDeleteFailures", this.msdyn_conversationdata_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_conversationdata_DuplicateBaseRecord", this.msdyn_conversationdata_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_conversationdata_DuplicateMatchingRecord", this.msdyn_conversationdata_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_conversationdata_MailboxTrackingFolders", this.msdyn_conversationdata_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_conversationdata_PrincipalObjectAttributeAccesses", this.msdyn_conversationdata_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_conversationdata_ProcessSession", this.msdyn_conversationdata_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_conversationdata_SyncErrors", this.msdyn_conversationdata_SyncErrors);
        writer.writeStringValue("msdyn_conversationdataid", this.msdyn_conversationdataid);
        writer.writeStringValue("msdyn_conversationid", this.msdyn_conversationid);
        writer.writeDateValue("msdyn_conversationtimestamp", this.msdyn_conversationtimestamp);
        writer.writeStringValue("msdyn_customattribute1", this.msdyn_customattribute1);
        writer.writeStringValue("msdyn_customattribute2", this.msdyn_customattribute2);
        writer.writeStringValue("msdyn_customattribute3", this.msdyn_customattribute3);
        writer.writeStringValue("msdyn_customattribute4", this.msdyn_customattribute4);
        writer.writeStringValue("msdyn_customattribute5", this.msdyn_customattribute5);
        writer.writeStringValue("msdyn_customercity", this.msdyn_customercity);
        writer.writeStringValue("msdyn_customercountry", this.msdyn_customercountry);
        writer.writeStringValue("msdyn_customerstate", this.msdyn_customerstate);
        writer.writeStringValue("msdyn_customerzip", this.msdyn_customerzip);
        writer.writeStringValue("msdyn_externalcorrelationid", this.msdyn_externalcorrelationid);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeStringValue("msdyn_primaryrelatedentityname", this.msdyn_primaryrelatedentityname);
        writer.writeStringValue("msdyn_primaryrelatedentityrecordid", this.msdyn_primaryrelatedentityrecordid);
        writer.writeStringValue("msdyn_providerid", this.msdyn_providerid);
        writer.writeStringValue("msdyn_providername", this.msdyn_providername);
        writer.writeStringValue("msdyn_region", this.msdyn_region);
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
