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

export class Msdyn_entityconfiguration extends Crmbaseentity implements Parsable {
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
    private _msdyn_copygeodatafromurs?: boolean | undefined;
    private _msdyn_datefilter1fieldname?: string | undefined;
    private _msdyn_datefilter1lastxday?: number | undefined;
    private _msdyn_datefilter1nextxday?: number | undefined;
    private _msdyn_datefilter2fieldname?: string | undefined;
    private _msdyn_datefilter2lastxday?: number | undefined;
    private _msdyn_datefilter2nextxday?: number | undefined;
    private _msdyn_enabledas?: number | undefined;
    private _msdyn_enabletriggerfilters?: boolean | undefined;
    private _msdyn_entity?: string | undefined;
    private _msdyn_entityconfiguration_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_entityconfiguration_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_entityconfiguration_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_entityconfiguration_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_entityconfiguration_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_entityconfiguration_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_entityconfiguration_ProcessSession?: Processsession[] | undefined;
    private _msdyn_entityconfiguration_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_entityconfigurationid?: string | undefined;
    private _msdyn_entityprimarykey?: string | undefined;
    private _msdyn_latitudefieldname?: string | undefined;
    private _msdyn_longitudefieldname?: string | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_radius?: number | undefined;
    private _msdyn_relationshipfieldname?: string | undefined;
    private _msdyn_timestampfieldname?: string | undefined;
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
     * Instantiates a new msdyn_entityconfiguration and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_entityconfiguration)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_entityconfiguration)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_entityconfiguration)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_entityconfiguration)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_entityconfiguration)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_entityconfiguration)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_entityconfiguration)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_entityconfiguration)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_entityconfiguration).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_entityconfiguration).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_entityconfiguration).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_entityconfiguration).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_entityconfiguration).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_entityconfiguration).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_entityconfiguration).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_copygeodatafromurs": (o, n) => { (o as unknown as Msdyn_entityconfiguration).msdyn_copygeodatafromurs = n.getBooleanValue(); },
            "msdyn_datefilter1fieldname": (o, n) => { (o as unknown as Msdyn_entityconfiguration).msdyn_datefilter1fieldname = n.getStringValue(); },
            "msdyn_datefilter1lastxday": (o, n) => { (o as unknown as Msdyn_entityconfiguration).msdyn_datefilter1lastxday = n.getNumberValue(); },
            "msdyn_datefilter1nextxday": (o, n) => { (o as unknown as Msdyn_entityconfiguration).msdyn_datefilter1nextxday = n.getNumberValue(); },
            "msdyn_datefilter2fieldname": (o, n) => { (o as unknown as Msdyn_entityconfiguration).msdyn_datefilter2fieldname = n.getStringValue(); },
            "msdyn_datefilter2lastxday": (o, n) => { (o as unknown as Msdyn_entityconfiguration).msdyn_datefilter2lastxday = n.getNumberValue(); },
            "msdyn_datefilter2nextxday": (o, n) => { (o as unknown as Msdyn_entityconfiguration).msdyn_datefilter2nextxday = n.getNumberValue(); },
            "msdyn_enabledas": (o, n) => { (o as unknown as Msdyn_entityconfiguration).msdyn_enabledas = n.getNumberValue(); },
            "msdyn_enabletriggerfilters": (o, n) => { (o as unknown as Msdyn_entityconfiguration).msdyn_enabletriggerfilters = n.getBooleanValue(); },
            "msdyn_entity": (o, n) => { (o as unknown as Msdyn_entityconfiguration).msdyn_entity = n.getStringValue(); },
            "msdyn_entityconfiguration_AsyncOperations": (o, n) => { (o as unknown as Msdyn_entityconfiguration).msdyn_entityconfiguration_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_entityconfiguration_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_entityconfiguration).msdyn_entityconfiguration_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_entityconfiguration_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_entityconfiguration).msdyn_entityconfiguration_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_entityconfiguration_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_entityconfiguration).msdyn_entityconfiguration_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_entityconfiguration_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_entityconfiguration).msdyn_entityconfiguration_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_entityconfiguration_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_entityconfiguration).msdyn_entityconfiguration_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_entityconfiguration_ProcessSession": (o, n) => { (o as unknown as Msdyn_entityconfiguration).msdyn_entityconfiguration_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_entityconfiguration_SyncErrors": (o, n) => { (o as unknown as Msdyn_entityconfiguration).msdyn_entityconfiguration_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_entityconfigurationid": (o, n) => { (o as unknown as Msdyn_entityconfiguration).msdyn_entityconfigurationid = n.getStringValue(); },
            "msdyn_entityprimarykey": (o, n) => { (o as unknown as Msdyn_entityconfiguration).msdyn_entityprimarykey = n.getStringValue(); },
            "msdyn_latitudefieldname": (o, n) => { (o as unknown as Msdyn_entityconfiguration).msdyn_latitudefieldname = n.getStringValue(); },
            "msdyn_longitudefieldname": (o, n) => { (o as unknown as Msdyn_entityconfiguration).msdyn_longitudefieldname = n.getStringValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_entityconfiguration).msdyn_name = n.getStringValue(); },
            "msdyn_radius": (o, n) => { (o as unknown as Msdyn_entityconfiguration).msdyn_radius = n.getNumberValue(); },
            "msdyn_relationshipfieldname": (o, n) => { (o as unknown as Msdyn_entityconfiguration).msdyn_relationshipfieldname = n.getStringValue(); },
            "msdyn_timestampfieldname": (o, n) => { (o as unknown as Msdyn_entityconfiguration).msdyn_timestampfieldname = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_entityconfiguration).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_entityconfiguration).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_entityconfiguration).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_entityconfiguration).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_entityconfiguration).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_entityconfiguration).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_entityconfiguration).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_entityconfiguration).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_entityconfiguration).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_entityconfiguration).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_copygeodatafromurs property value. 
     * @returns a boolean
     */
    public get msdyn_copygeodatafromurs() {
        return this._msdyn_copygeodatafromurs;
    };
    /**
     * Sets the msdyn_copygeodatafromurs property value. 
     * @param value Value to set for the msdyn_copygeodatafromurs property.
     */
    public set msdyn_copygeodatafromurs(value: boolean | undefined) {
        this._msdyn_copygeodatafromurs = value;
    };
    /**
     * Gets the msdyn_datefilter1fieldname property value. 
     * @returns a string
     */
    public get msdyn_datefilter1fieldname() {
        return this._msdyn_datefilter1fieldname;
    };
    /**
     * Sets the msdyn_datefilter1fieldname property value. 
     * @param value Value to set for the msdyn_datefilter1fieldname property.
     */
    public set msdyn_datefilter1fieldname(value: string | undefined) {
        this._msdyn_datefilter1fieldname = value;
    };
    /**
     * Gets the msdyn_datefilter1lastxday property value. 
     * @returns a integer
     */
    public get msdyn_datefilter1lastxday() {
        return this._msdyn_datefilter1lastxday;
    };
    /**
     * Sets the msdyn_datefilter1lastxday property value. 
     * @param value Value to set for the msdyn_datefilter1lastxday property.
     */
    public set msdyn_datefilter1lastxday(value: number | undefined) {
        this._msdyn_datefilter1lastxday = value;
    };
    /**
     * Gets the msdyn_datefilter1nextxday property value. 
     * @returns a integer
     */
    public get msdyn_datefilter1nextxday() {
        return this._msdyn_datefilter1nextxday;
    };
    /**
     * Sets the msdyn_datefilter1nextxday property value. 
     * @param value Value to set for the msdyn_datefilter1nextxday property.
     */
    public set msdyn_datefilter1nextxday(value: number | undefined) {
        this._msdyn_datefilter1nextxday = value;
    };
    /**
     * Gets the msdyn_datefilter2fieldname property value. 
     * @returns a string
     */
    public get msdyn_datefilter2fieldname() {
        return this._msdyn_datefilter2fieldname;
    };
    /**
     * Sets the msdyn_datefilter2fieldname property value. 
     * @param value Value to set for the msdyn_datefilter2fieldname property.
     */
    public set msdyn_datefilter2fieldname(value: string | undefined) {
        this._msdyn_datefilter2fieldname = value;
    };
    /**
     * Gets the msdyn_datefilter2lastxday property value. 
     * @returns a integer
     */
    public get msdyn_datefilter2lastxday() {
        return this._msdyn_datefilter2lastxday;
    };
    /**
     * Sets the msdyn_datefilter2lastxday property value. 
     * @param value Value to set for the msdyn_datefilter2lastxday property.
     */
    public set msdyn_datefilter2lastxday(value: number | undefined) {
        this._msdyn_datefilter2lastxday = value;
    };
    /**
     * Gets the msdyn_datefilter2nextxday property value. 
     * @returns a integer
     */
    public get msdyn_datefilter2nextxday() {
        return this._msdyn_datefilter2nextxday;
    };
    /**
     * Sets the msdyn_datefilter2nextxday property value. 
     * @param value Value to set for the msdyn_datefilter2nextxday property.
     */
    public set msdyn_datefilter2nextxday(value: number | undefined) {
        this._msdyn_datefilter2nextxday = value;
    };
    /**
     * Gets the msdyn_enabledas property value. 
     * @returns a integer
     */
    public get msdyn_enabledas() {
        return this._msdyn_enabledas;
    };
    /**
     * Sets the msdyn_enabledas property value. 
     * @param value Value to set for the msdyn_enabledas property.
     */
    public set msdyn_enabledas(value: number | undefined) {
        this._msdyn_enabledas = value;
    };
    /**
     * Gets the msdyn_enabletriggerfilters property value. 
     * @returns a boolean
     */
    public get msdyn_enabletriggerfilters() {
        return this._msdyn_enabletriggerfilters;
    };
    /**
     * Sets the msdyn_enabletriggerfilters property value. 
     * @param value Value to set for the msdyn_enabletriggerfilters property.
     */
    public set msdyn_enabletriggerfilters(value: boolean | undefined) {
        this._msdyn_enabletriggerfilters = value;
    };
    /**
     * Gets the msdyn_entity property value. 
     * @returns a string
     */
    public get msdyn_entity() {
        return this._msdyn_entity;
    };
    /**
     * Sets the msdyn_entity property value. 
     * @param value Value to set for the msdyn_entity property.
     */
    public set msdyn_entity(value: string | undefined) {
        this._msdyn_entity = value;
    };
    /**
     * Gets the msdyn_entityconfiguration_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_entityconfiguration_AsyncOperations() {
        return this._msdyn_entityconfiguration_AsyncOperations;
    };
    /**
     * Sets the msdyn_entityconfiguration_AsyncOperations property value. 
     * @param value Value to set for the msdyn_entityconfiguration_AsyncOperations property.
     */
    public set msdyn_entityconfiguration_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_entityconfiguration_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_entityconfiguration_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_entityconfiguration_BulkDeleteFailures() {
        return this._msdyn_entityconfiguration_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_entityconfiguration_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_entityconfiguration_BulkDeleteFailures property.
     */
    public set msdyn_entityconfiguration_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_entityconfiguration_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_entityconfiguration_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_entityconfiguration_DuplicateBaseRecord() {
        return this._msdyn_entityconfiguration_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_entityconfiguration_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_entityconfiguration_DuplicateBaseRecord property.
     */
    public set msdyn_entityconfiguration_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_entityconfiguration_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_entityconfiguration_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_entityconfiguration_DuplicateMatchingRecord() {
        return this._msdyn_entityconfiguration_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_entityconfiguration_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_entityconfiguration_DuplicateMatchingRecord property.
     */
    public set msdyn_entityconfiguration_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_entityconfiguration_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_entityconfiguration_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_entityconfiguration_MailboxTrackingFolders() {
        return this._msdyn_entityconfiguration_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_entityconfiguration_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_entityconfiguration_MailboxTrackingFolders property.
     */
    public set msdyn_entityconfiguration_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_entityconfiguration_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_entityconfiguration_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_entityconfiguration_PrincipalObjectAttributeAccesses() {
        return this._msdyn_entityconfiguration_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_entityconfiguration_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_entityconfiguration_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_entityconfiguration_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_entityconfiguration_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_entityconfiguration_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_entityconfiguration_ProcessSession() {
        return this._msdyn_entityconfiguration_ProcessSession;
    };
    /**
     * Sets the msdyn_entityconfiguration_ProcessSession property value. 
     * @param value Value to set for the msdyn_entityconfiguration_ProcessSession property.
     */
    public set msdyn_entityconfiguration_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_entityconfiguration_ProcessSession = value;
    };
    /**
     * Gets the msdyn_entityconfiguration_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_entityconfiguration_SyncErrors() {
        return this._msdyn_entityconfiguration_SyncErrors;
    };
    /**
     * Sets the msdyn_entityconfiguration_SyncErrors property value. 
     * @param value Value to set for the msdyn_entityconfiguration_SyncErrors property.
     */
    public set msdyn_entityconfiguration_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_entityconfiguration_SyncErrors = value;
    };
    /**
     * Gets the msdyn_entityconfigurationid property value. 
     * @returns a string
     */
    public get msdyn_entityconfigurationid() {
        return this._msdyn_entityconfigurationid;
    };
    /**
     * Sets the msdyn_entityconfigurationid property value. 
     * @param value Value to set for the msdyn_entityconfigurationid property.
     */
    public set msdyn_entityconfigurationid(value: string | undefined) {
        this._msdyn_entityconfigurationid = value;
    };
    /**
     * Gets the msdyn_entityprimarykey property value. 
     * @returns a string
     */
    public get msdyn_entityprimarykey() {
        return this._msdyn_entityprimarykey;
    };
    /**
     * Sets the msdyn_entityprimarykey property value. 
     * @param value Value to set for the msdyn_entityprimarykey property.
     */
    public set msdyn_entityprimarykey(value: string | undefined) {
        this._msdyn_entityprimarykey = value;
    };
    /**
     * Gets the msdyn_latitudefieldname property value. 
     * @returns a string
     */
    public get msdyn_latitudefieldname() {
        return this._msdyn_latitudefieldname;
    };
    /**
     * Sets the msdyn_latitudefieldname property value. 
     * @param value Value to set for the msdyn_latitudefieldname property.
     */
    public set msdyn_latitudefieldname(value: string | undefined) {
        this._msdyn_latitudefieldname = value;
    };
    /**
     * Gets the msdyn_longitudefieldname property value. 
     * @returns a string
     */
    public get msdyn_longitudefieldname() {
        return this._msdyn_longitudefieldname;
    };
    /**
     * Sets the msdyn_longitudefieldname property value. 
     * @param value Value to set for the msdyn_longitudefieldname property.
     */
    public set msdyn_longitudefieldname(value: string | undefined) {
        this._msdyn_longitudefieldname = value;
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
     * Gets the msdyn_radius property value. 
     * @returns a double
     */
    public get msdyn_radius() {
        return this._msdyn_radius;
    };
    /**
     * Sets the msdyn_radius property value. 
     * @param value Value to set for the msdyn_radius property.
     */
    public set msdyn_radius(value: number | undefined) {
        this._msdyn_radius = value;
    };
    /**
     * Gets the msdyn_relationshipfieldname property value. 
     * @returns a string
     */
    public get msdyn_relationshipfieldname() {
        return this._msdyn_relationshipfieldname;
    };
    /**
     * Sets the msdyn_relationshipfieldname property value. 
     * @param value Value to set for the msdyn_relationshipfieldname property.
     */
    public set msdyn_relationshipfieldname(value: string | undefined) {
        this._msdyn_relationshipfieldname = value;
    };
    /**
     * Gets the msdyn_timestampfieldname property value. 
     * @returns a string
     */
    public get msdyn_timestampfieldname() {
        return this._msdyn_timestampfieldname;
    };
    /**
     * Sets the msdyn_timestampfieldname property value. 
     * @param value Value to set for the msdyn_timestampfieldname property.
     */
    public set msdyn_timestampfieldname(value: string | undefined) {
        this._msdyn_timestampfieldname = value;
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
        writer.writeBooleanValue("msdyn_copygeodatafromurs", this.msdyn_copygeodatafromurs);
        writer.writeStringValue("msdyn_datefilter1fieldname", this.msdyn_datefilter1fieldname);
        writer.writeNumberValue("msdyn_datefilter1lastxday", this.msdyn_datefilter1lastxday);
        writer.writeNumberValue("msdyn_datefilter1nextxday", this.msdyn_datefilter1nextxday);
        writer.writeStringValue("msdyn_datefilter2fieldname", this.msdyn_datefilter2fieldname);
        writer.writeNumberValue("msdyn_datefilter2lastxday", this.msdyn_datefilter2lastxday);
        writer.writeNumberValue("msdyn_datefilter2nextxday", this.msdyn_datefilter2nextxday);
        writer.writeNumberValue("msdyn_enabledas", this.msdyn_enabledas);
        writer.writeBooleanValue("msdyn_enabletriggerfilters", this.msdyn_enabletriggerfilters);
        writer.writeStringValue("msdyn_entity", this.msdyn_entity);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_entityconfiguration_AsyncOperations", this.msdyn_entityconfiguration_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_entityconfiguration_BulkDeleteFailures", this.msdyn_entityconfiguration_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_entityconfiguration_DuplicateBaseRecord", this.msdyn_entityconfiguration_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_entityconfiguration_DuplicateMatchingRecord", this.msdyn_entityconfiguration_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_entityconfiguration_MailboxTrackingFolders", this.msdyn_entityconfiguration_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_entityconfiguration_PrincipalObjectAttributeAccesses", this.msdyn_entityconfiguration_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_entityconfiguration_ProcessSession", this.msdyn_entityconfiguration_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_entityconfiguration_SyncErrors", this.msdyn_entityconfiguration_SyncErrors);
        writer.writeStringValue("msdyn_entityconfigurationid", this.msdyn_entityconfigurationid);
        writer.writeStringValue("msdyn_entityprimarykey", this.msdyn_entityprimarykey);
        writer.writeStringValue("msdyn_latitudefieldname", this.msdyn_latitudefieldname);
        writer.writeStringValue("msdyn_longitudefieldname", this.msdyn_longitudefieldname);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeNumberValue("msdyn_radius", this.msdyn_radius);
        writer.writeStringValue("msdyn_relationshipfieldname", this.msdyn_relationshipfieldname);
        writer.writeStringValue("msdyn_timestampfieldname", this.msdyn_timestampfieldname);
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
