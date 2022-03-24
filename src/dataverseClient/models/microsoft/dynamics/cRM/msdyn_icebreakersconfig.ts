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

export class Msdyn_icebreakersconfig extends Crmbaseentity implements Parsable {
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
    private _msdyn_aretermsaccepted?: boolean | undefined;
    private _msdyn_icebreakersconfig_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_icebreakersconfig_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_icebreakersconfig_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_icebreakersconfig_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_icebreakersconfig_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_icebreakersconfig_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_icebreakersconfig_ProcessSession?: Processsession[] | undefined;
    private _msdyn_icebreakersconfig_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_icebreakersconfigid?: string | undefined;
    private _msdyn_isadminsettingenabled?: boolean | undefined;
    private _msdyn_isentertainmentcategoryenabled?: boolean | undefined;
    private _msdyn_isfamilycategoryenabled?: boolean | undefined;
    private _msdyn_ishealthcategoryenabled?: boolean | undefined;
    private _msdyn_issportscategoryenabled?: boolean | undefined;
    private _msdyn_name?: string | undefined;
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
     * Instantiates a new msdyn_icebreakersconfig and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_icebreakersconfig)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_icebreakersconfig)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_icebreakersconfig)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_icebreakersconfig)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_icebreakersconfig)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_icebreakersconfig)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_icebreakersconfig)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_icebreakersconfig)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_icebreakersconfig).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_icebreakersconfig).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_icebreakersconfig).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_icebreakersconfig).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_icebreakersconfig).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_icebreakersconfig).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_icebreakersconfig).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_aretermsaccepted": (o, n) => { (o as unknown as Msdyn_icebreakersconfig).msdyn_aretermsaccepted = n.getBooleanValue(); },
            "msdyn_icebreakersconfig_AsyncOperations": (o, n) => { (o as unknown as Msdyn_icebreakersconfig).msdyn_icebreakersconfig_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_icebreakersconfig_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_icebreakersconfig).msdyn_icebreakersconfig_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_icebreakersconfig_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_icebreakersconfig).msdyn_icebreakersconfig_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_icebreakersconfig_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_icebreakersconfig).msdyn_icebreakersconfig_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_icebreakersconfig_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_icebreakersconfig).msdyn_icebreakersconfig_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_icebreakersconfig_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_icebreakersconfig).msdyn_icebreakersconfig_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_icebreakersconfig_ProcessSession": (o, n) => { (o as unknown as Msdyn_icebreakersconfig).msdyn_icebreakersconfig_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_icebreakersconfig_SyncErrors": (o, n) => { (o as unknown as Msdyn_icebreakersconfig).msdyn_icebreakersconfig_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_icebreakersconfigid": (o, n) => { (o as unknown as Msdyn_icebreakersconfig).msdyn_icebreakersconfigid = n.getStringValue(); },
            "msdyn_isadminsettingenabled": (o, n) => { (o as unknown as Msdyn_icebreakersconfig).msdyn_isadminsettingenabled = n.getBooleanValue(); },
            "msdyn_isentertainmentcategoryenabled": (o, n) => { (o as unknown as Msdyn_icebreakersconfig).msdyn_isentertainmentcategoryenabled = n.getBooleanValue(); },
            "msdyn_isfamilycategoryenabled": (o, n) => { (o as unknown as Msdyn_icebreakersconfig).msdyn_isfamilycategoryenabled = n.getBooleanValue(); },
            "msdyn_ishealthcategoryenabled": (o, n) => { (o as unknown as Msdyn_icebreakersconfig).msdyn_ishealthcategoryenabled = n.getBooleanValue(); },
            "msdyn_issportscategoryenabled": (o, n) => { (o as unknown as Msdyn_icebreakersconfig).msdyn_issportscategoryenabled = n.getBooleanValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_icebreakersconfig).msdyn_name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_icebreakersconfig).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_icebreakersconfig).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_icebreakersconfig).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_icebreakersconfig).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_icebreakersconfig).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_icebreakersconfig).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_icebreakersconfig).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_icebreakersconfig).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_icebreakersconfig).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_icebreakersconfig).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_aretermsaccepted property value. 
     * @returns a boolean
     */
    public get msdyn_aretermsaccepted() {
        return this._msdyn_aretermsaccepted;
    };
    /**
     * Sets the msdyn_aretermsaccepted property value. 
     * @param value Value to set for the msdyn_aretermsaccepted property.
     */
    public set msdyn_aretermsaccepted(value: boolean | undefined) {
        this._msdyn_aretermsaccepted = value;
    };
    /**
     * Gets the msdyn_icebreakersconfig_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_icebreakersconfig_AsyncOperations() {
        return this._msdyn_icebreakersconfig_AsyncOperations;
    };
    /**
     * Sets the msdyn_icebreakersconfig_AsyncOperations property value. 
     * @param value Value to set for the msdyn_icebreakersconfig_AsyncOperations property.
     */
    public set msdyn_icebreakersconfig_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_icebreakersconfig_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_icebreakersconfig_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_icebreakersconfig_BulkDeleteFailures() {
        return this._msdyn_icebreakersconfig_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_icebreakersconfig_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_icebreakersconfig_BulkDeleteFailures property.
     */
    public set msdyn_icebreakersconfig_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_icebreakersconfig_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_icebreakersconfig_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_icebreakersconfig_DuplicateBaseRecord() {
        return this._msdyn_icebreakersconfig_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_icebreakersconfig_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_icebreakersconfig_DuplicateBaseRecord property.
     */
    public set msdyn_icebreakersconfig_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_icebreakersconfig_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_icebreakersconfig_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_icebreakersconfig_DuplicateMatchingRecord() {
        return this._msdyn_icebreakersconfig_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_icebreakersconfig_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_icebreakersconfig_DuplicateMatchingRecord property.
     */
    public set msdyn_icebreakersconfig_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_icebreakersconfig_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_icebreakersconfig_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_icebreakersconfig_MailboxTrackingFolders() {
        return this._msdyn_icebreakersconfig_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_icebreakersconfig_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_icebreakersconfig_MailboxTrackingFolders property.
     */
    public set msdyn_icebreakersconfig_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_icebreakersconfig_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_icebreakersconfig_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_icebreakersconfig_PrincipalObjectAttributeAccesses() {
        return this._msdyn_icebreakersconfig_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_icebreakersconfig_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_icebreakersconfig_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_icebreakersconfig_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_icebreakersconfig_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_icebreakersconfig_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_icebreakersconfig_ProcessSession() {
        return this._msdyn_icebreakersconfig_ProcessSession;
    };
    /**
     * Sets the msdyn_icebreakersconfig_ProcessSession property value. 
     * @param value Value to set for the msdyn_icebreakersconfig_ProcessSession property.
     */
    public set msdyn_icebreakersconfig_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_icebreakersconfig_ProcessSession = value;
    };
    /**
     * Gets the msdyn_icebreakersconfig_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_icebreakersconfig_SyncErrors() {
        return this._msdyn_icebreakersconfig_SyncErrors;
    };
    /**
     * Sets the msdyn_icebreakersconfig_SyncErrors property value. 
     * @param value Value to set for the msdyn_icebreakersconfig_SyncErrors property.
     */
    public set msdyn_icebreakersconfig_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_icebreakersconfig_SyncErrors = value;
    };
    /**
     * Gets the msdyn_icebreakersconfigid property value. 
     * @returns a string
     */
    public get msdyn_icebreakersconfigid() {
        return this._msdyn_icebreakersconfigid;
    };
    /**
     * Sets the msdyn_icebreakersconfigid property value. 
     * @param value Value to set for the msdyn_icebreakersconfigid property.
     */
    public set msdyn_icebreakersconfigid(value: string | undefined) {
        this._msdyn_icebreakersconfigid = value;
    };
    /**
     * Gets the msdyn_isadminsettingenabled property value. 
     * @returns a boolean
     */
    public get msdyn_isadminsettingenabled() {
        return this._msdyn_isadminsettingenabled;
    };
    /**
     * Sets the msdyn_isadminsettingenabled property value. 
     * @param value Value to set for the msdyn_isadminsettingenabled property.
     */
    public set msdyn_isadminsettingenabled(value: boolean | undefined) {
        this._msdyn_isadminsettingenabled = value;
    };
    /**
     * Gets the msdyn_isentertainmentcategoryenabled property value. 
     * @returns a boolean
     */
    public get msdyn_isentertainmentcategoryenabled() {
        return this._msdyn_isentertainmentcategoryenabled;
    };
    /**
     * Sets the msdyn_isentertainmentcategoryenabled property value. 
     * @param value Value to set for the msdyn_isentertainmentcategoryenabled property.
     */
    public set msdyn_isentertainmentcategoryenabled(value: boolean | undefined) {
        this._msdyn_isentertainmentcategoryenabled = value;
    };
    /**
     * Gets the msdyn_isfamilycategoryenabled property value. 
     * @returns a boolean
     */
    public get msdyn_isfamilycategoryenabled() {
        return this._msdyn_isfamilycategoryenabled;
    };
    /**
     * Sets the msdyn_isfamilycategoryenabled property value. 
     * @param value Value to set for the msdyn_isfamilycategoryenabled property.
     */
    public set msdyn_isfamilycategoryenabled(value: boolean | undefined) {
        this._msdyn_isfamilycategoryenabled = value;
    };
    /**
     * Gets the msdyn_ishealthcategoryenabled property value. 
     * @returns a boolean
     */
    public get msdyn_ishealthcategoryenabled() {
        return this._msdyn_ishealthcategoryenabled;
    };
    /**
     * Sets the msdyn_ishealthcategoryenabled property value. 
     * @param value Value to set for the msdyn_ishealthcategoryenabled property.
     */
    public set msdyn_ishealthcategoryenabled(value: boolean | undefined) {
        this._msdyn_ishealthcategoryenabled = value;
    };
    /**
     * Gets the msdyn_issportscategoryenabled property value. 
     * @returns a boolean
     */
    public get msdyn_issportscategoryenabled() {
        return this._msdyn_issportscategoryenabled;
    };
    /**
     * Sets the msdyn_issportscategoryenabled property value. 
     * @param value Value to set for the msdyn_issportscategoryenabled property.
     */
    public set msdyn_issportscategoryenabled(value: boolean | undefined) {
        this._msdyn_issportscategoryenabled = value;
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
        writer.writeBooleanValue("msdyn_aretermsaccepted", this.msdyn_aretermsaccepted);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_icebreakersconfig_AsyncOperations", this.msdyn_icebreakersconfig_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_icebreakersconfig_BulkDeleteFailures", this.msdyn_icebreakersconfig_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_icebreakersconfig_DuplicateBaseRecord", this.msdyn_icebreakersconfig_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_icebreakersconfig_DuplicateMatchingRecord", this.msdyn_icebreakersconfig_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_icebreakersconfig_MailboxTrackingFolders", this.msdyn_icebreakersconfig_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_icebreakersconfig_PrincipalObjectAttributeAccesses", this.msdyn_icebreakersconfig_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_icebreakersconfig_ProcessSession", this.msdyn_icebreakersconfig_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_icebreakersconfig_SyncErrors", this.msdyn_icebreakersconfig_SyncErrors);
        writer.writeStringValue("msdyn_icebreakersconfigid", this.msdyn_icebreakersconfigid);
        writer.writeBooleanValue("msdyn_isadminsettingenabled", this.msdyn_isadminsettingenabled);
        writer.writeBooleanValue("msdyn_isentertainmentcategoryenabled", this.msdyn_isentertainmentcategoryenabled);
        writer.writeBooleanValue("msdyn_isfamilycategoryenabled", this.msdyn_isfamilycategoryenabled);
        writer.writeBooleanValue("msdyn_ishealthcategoryenabled", this.msdyn_ishealthcategoryenabled);
        writer.writeBooleanValue("msdyn_issportscategoryenabled", this.msdyn_issportscategoryenabled);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
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
