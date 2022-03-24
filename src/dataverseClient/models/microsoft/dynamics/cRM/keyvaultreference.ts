import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createEmailserverprofileFromDiscriminatorValue} from './createEmailserverprofileFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createManagedidentityFromDiscriminatorValue} from './createManagedidentityFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createServiceendpointFromDiscriminatorValue} from './createServiceendpointFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Emailserverprofile, Mailboxtrackingfolder, Managedidentity, Principal, Principalobjectattributeaccess, Processsession, Serviceendpoint, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Keyvaultreference extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __managedidentityid_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _componentidunique?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _ismanaged?: boolean | undefined;
    private _isvalidated?: boolean | undefined;
    private _keyname?: string | undefined;
    private _keytype?: number | undefined;
    private _keyvaultreference_AsyncOperations?: Asyncoperation[] | undefined;
    private _keyvaultreference_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _keyvaultreference_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _keyvaultreference_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _keyvaultreference_emailserverprofile_keyvaultreferenceid?: Emailserverprofile[] | undefined;
    private _keyvaultreference_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _keyvaultreference_ManagedIdentity?: Managedidentity[] | undefined;
    private _keyvaultreference_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _keyvaultreference_ProcessSession?: Processsession[] | undefined;
    private _keyvaultreference_ServiceEndpoint?: Serviceendpoint[] | undefined;
    private _keyvaultreference_SyncErrors?: Syncerror[] | undefined;
    private _keyvaultreferenceid?: string | undefined;
    private _keyvaulturi?: string | undefined;
    private _managedidentityid?: Managedidentity | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _overwritetime?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _preauthorizedapplicationtype?: number | undefined;
    private _solutionid?: string | undefined;
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
     * Gets the _managedidentityid_value property value. 
     * @returns a string
     */
    public get _managedidentityid_value() {
        return this.__managedidentityid_value;
    };
    /**
     * Sets the _managedidentityid_value property value. 
     * @param value Value to set for the _managedidentityid_value property.
     */
    public set _managedidentityid_value(value: string | undefined) {
        this.__managedidentityid_value = value;
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
     * Gets the componentidunique property value. 
     * @returns a string
     */
    public get componentidunique() {
        return this._componentidunique;
    };
    /**
     * Sets the componentidunique property value. 
     * @param value Value to set for the componentidunique property.
     */
    public set componentidunique(value: string | undefined) {
        this._componentidunique = value;
    };
    /**
     * Gets the componentstate property value. 
     * @returns a integer
     */
    public get componentstate() {
        return this._componentstate;
    };
    /**
     * Sets the componentstate property value. 
     * @param value Value to set for the componentstate property.
     */
    public set componentstate(value: number | undefined) {
        this._componentstate = value;
    };
    /**
     * Instantiates a new keyvaultreference and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Keyvaultreference)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Keyvaultreference)._createdonbehalfby_value = n.getStringValue(); },
            "_managedidentityid_value": (o, n) => { (o as unknown as Keyvaultreference)._managedidentityid_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Keyvaultreference)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Keyvaultreference)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Keyvaultreference)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Keyvaultreference)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Keyvaultreference)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Keyvaultreference)._owninguser_value = n.getStringValue(); },
            "componentidunique": (o, n) => { (o as unknown as Keyvaultreference).componentidunique = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Keyvaultreference).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Keyvaultreference).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Keyvaultreference).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Keyvaultreference).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Keyvaultreference).importsequencenumber = n.getNumberValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Keyvaultreference).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Keyvaultreference).ismanaged = n.getBooleanValue(); },
            "isvalidated": (o, n) => { (o as unknown as Keyvaultreference).isvalidated = n.getBooleanValue(); },
            "keyname": (o, n) => { (o as unknown as Keyvaultreference).keyname = n.getStringValue(); },
            "keytype": (o, n) => { (o as unknown as Keyvaultreference).keytype = n.getNumberValue(); },
            "keyvaultreference_AsyncOperations": (o, n) => { (o as unknown as Keyvaultreference).keyvaultreference_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "keyvaultreference_BulkDeleteFailures": (o, n) => { (o as unknown as Keyvaultreference).keyvaultreference_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "keyvaultreference_DuplicateBaseRecord": (o, n) => { (o as unknown as Keyvaultreference).keyvaultreference_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "keyvaultreference_DuplicateMatchingRecord": (o, n) => { (o as unknown as Keyvaultreference).keyvaultreference_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "keyvaultreference_emailserverprofile_keyvaultreferenceid": (o, n) => { (o as unknown as Keyvaultreference).keyvaultreference_emailserverprofile_keyvaultreferenceid = n.getCollectionOfObjectValues<Emailserverprofile>(createEmailserverprofileFromDiscriminatorValue); },
            "keyvaultreference_MailboxTrackingFolders": (o, n) => { (o as unknown as Keyvaultreference).keyvaultreference_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "keyvaultreference_ManagedIdentity": (o, n) => { (o as unknown as Keyvaultreference).keyvaultreference_ManagedIdentity = n.getCollectionOfObjectValues<Managedidentity>(createManagedidentityFromDiscriminatorValue); },
            "keyvaultreference_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Keyvaultreference).keyvaultreference_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "keyvaultreference_ProcessSession": (o, n) => { (o as unknown as Keyvaultreference).keyvaultreference_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "keyvaultreference_ServiceEndpoint": (o, n) => { (o as unknown as Keyvaultreference).keyvaultreference_ServiceEndpoint = n.getCollectionOfObjectValues<Serviceendpoint>(createServiceendpointFromDiscriminatorValue); },
            "keyvaultreference_SyncErrors": (o, n) => { (o as unknown as Keyvaultreference).keyvaultreference_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "keyvaultreferenceid": (o, n) => { (o as unknown as Keyvaultreference).keyvaultreferenceid = n.getStringValue(); },
            "keyvaulturi": (o, n) => { (o as unknown as Keyvaultreference).keyvaulturi = n.getStringValue(); },
            "managedidentityid": (o, n) => { (o as unknown as Keyvaultreference).managedidentityid = n.getObjectValue<Managedidentity>(createManagedidentityFromDiscriminatorValue); },
            "modifiedby": (o, n) => { (o as unknown as Keyvaultreference).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Keyvaultreference).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Keyvaultreference).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Keyvaultreference).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Keyvaultreference).overwritetime = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Keyvaultreference).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Keyvaultreference).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Keyvaultreference).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Keyvaultreference).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "preauthorizedapplicationtype": (o, n) => { (o as unknown as Keyvaultreference).preauthorizedapplicationtype = n.getNumberValue(); },
            "solutionid": (o, n) => { (o as unknown as Keyvaultreference).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Keyvaultreference).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Keyvaultreference).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Keyvaultreference).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Keyvaultreference).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Keyvaultreference).versionnumber = n.getNumberValue(); },
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
     * Gets the iscustomizable property value. 
     * @returns a BooleanManagedProperty
     */
    public get iscustomizable() {
        return this._iscustomizable;
    };
    /**
     * Sets the iscustomizable property value. 
     * @param value Value to set for the iscustomizable property.
     */
    public set iscustomizable(value: BooleanManagedProperty | undefined) {
        this._iscustomizable = value;
    };
    /**
     * Gets the ismanaged property value. 
     * @returns a boolean
     */
    public get ismanaged() {
        return this._ismanaged;
    };
    /**
     * Sets the ismanaged property value. 
     * @param value Value to set for the ismanaged property.
     */
    public set ismanaged(value: boolean | undefined) {
        this._ismanaged = value;
    };
    /**
     * Gets the isvalidated property value. 
     * @returns a boolean
     */
    public get isvalidated() {
        return this._isvalidated;
    };
    /**
     * Sets the isvalidated property value. 
     * @param value Value to set for the isvalidated property.
     */
    public set isvalidated(value: boolean | undefined) {
        this._isvalidated = value;
    };
    /**
     * Gets the keyname property value. 
     * @returns a string
     */
    public get keyname() {
        return this._keyname;
    };
    /**
     * Sets the keyname property value. 
     * @param value Value to set for the keyname property.
     */
    public set keyname(value: string | undefined) {
        this._keyname = value;
    };
    /**
     * Gets the keytype property value. 
     * @returns a integer
     */
    public get keytype() {
        return this._keytype;
    };
    /**
     * Sets the keytype property value. 
     * @param value Value to set for the keytype property.
     */
    public set keytype(value: number | undefined) {
        this._keytype = value;
    };
    /**
     * Gets the keyvaultreference_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get keyvaultreference_AsyncOperations() {
        return this._keyvaultreference_AsyncOperations;
    };
    /**
     * Sets the keyvaultreference_AsyncOperations property value. 
     * @param value Value to set for the keyvaultreference_AsyncOperations property.
     */
    public set keyvaultreference_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._keyvaultreference_AsyncOperations = value;
    };
    /**
     * Gets the keyvaultreference_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get keyvaultreference_BulkDeleteFailures() {
        return this._keyvaultreference_BulkDeleteFailures;
    };
    /**
     * Sets the keyvaultreference_BulkDeleteFailures property value. 
     * @param value Value to set for the keyvaultreference_BulkDeleteFailures property.
     */
    public set keyvaultreference_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._keyvaultreference_BulkDeleteFailures = value;
    };
    /**
     * Gets the keyvaultreference_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get keyvaultreference_DuplicateBaseRecord() {
        return this._keyvaultreference_DuplicateBaseRecord;
    };
    /**
     * Sets the keyvaultreference_DuplicateBaseRecord property value. 
     * @param value Value to set for the keyvaultreference_DuplicateBaseRecord property.
     */
    public set keyvaultreference_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._keyvaultreference_DuplicateBaseRecord = value;
    };
    /**
     * Gets the keyvaultreference_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get keyvaultreference_DuplicateMatchingRecord() {
        return this._keyvaultreference_DuplicateMatchingRecord;
    };
    /**
     * Sets the keyvaultreference_DuplicateMatchingRecord property value. 
     * @param value Value to set for the keyvaultreference_DuplicateMatchingRecord property.
     */
    public set keyvaultreference_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._keyvaultreference_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the keyvaultreference_emailserverprofile_keyvaultreferenceid property value. 
     * @returns a emailserverprofile
     */
    public get keyvaultreference_emailserverprofile_keyvaultreferenceid() {
        return this._keyvaultreference_emailserverprofile_keyvaultreferenceid;
    };
    /**
     * Sets the keyvaultreference_emailserverprofile_keyvaultreferenceid property value. 
     * @param value Value to set for the keyvaultreference_emailserverprofile_keyvaultreferenceid property.
     */
    public set keyvaultreference_emailserverprofile_keyvaultreferenceid(value: Emailserverprofile[] | undefined) {
        this._keyvaultreference_emailserverprofile_keyvaultreferenceid = value;
    };
    /**
     * Gets the keyvaultreference_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get keyvaultreference_MailboxTrackingFolders() {
        return this._keyvaultreference_MailboxTrackingFolders;
    };
    /**
     * Sets the keyvaultreference_MailboxTrackingFolders property value. 
     * @param value Value to set for the keyvaultreference_MailboxTrackingFolders property.
     */
    public set keyvaultreference_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._keyvaultreference_MailboxTrackingFolders = value;
    };
    /**
     * Gets the keyvaultreference_ManagedIdentity property value. 
     * @returns a managedidentity
     */
    public get keyvaultreference_ManagedIdentity() {
        return this._keyvaultreference_ManagedIdentity;
    };
    /**
     * Sets the keyvaultreference_ManagedIdentity property value. 
     * @param value Value to set for the keyvaultreference_ManagedIdentity property.
     */
    public set keyvaultreference_ManagedIdentity(value: Managedidentity[] | undefined) {
        this._keyvaultreference_ManagedIdentity = value;
    };
    /**
     * Gets the keyvaultreference_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get keyvaultreference_PrincipalObjectAttributeAccesses() {
        return this._keyvaultreference_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the keyvaultreference_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the keyvaultreference_PrincipalObjectAttributeAccesses property.
     */
    public set keyvaultreference_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._keyvaultreference_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the keyvaultreference_ProcessSession property value. 
     * @returns a processsession
     */
    public get keyvaultreference_ProcessSession() {
        return this._keyvaultreference_ProcessSession;
    };
    /**
     * Sets the keyvaultreference_ProcessSession property value. 
     * @param value Value to set for the keyvaultreference_ProcessSession property.
     */
    public set keyvaultreference_ProcessSession(value: Processsession[] | undefined) {
        this._keyvaultreference_ProcessSession = value;
    };
    /**
     * Gets the keyvaultreference_ServiceEndpoint property value. 
     * @returns a serviceendpoint
     */
    public get keyvaultreference_ServiceEndpoint() {
        return this._keyvaultreference_ServiceEndpoint;
    };
    /**
     * Sets the keyvaultreference_ServiceEndpoint property value. 
     * @param value Value to set for the keyvaultreference_ServiceEndpoint property.
     */
    public set keyvaultreference_ServiceEndpoint(value: Serviceendpoint[] | undefined) {
        this._keyvaultreference_ServiceEndpoint = value;
    };
    /**
     * Gets the keyvaultreference_SyncErrors property value. 
     * @returns a syncerror
     */
    public get keyvaultreference_SyncErrors() {
        return this._keyvaultreference_SyncErrors;
    };
    /**
     * Sets the keyvaultreference_SyncErrors property value. 
     * @param value Value to set for the keyvaultreference_SyncErrors property.
     */
    public set keyvaultreference_SyncErrors(value: Syncerror[] | undefined) {
        this._keyvaultreference_SyncErrors = value;
    };
    /**
     * Gets the keyvaultreferenceid property value. 
     * @returns a string
     */
    public get keyvaultreferenceid() {
        return this._keyvaultreferenceid;
    };
    /**
     * Sets the keyvaultreferenceid property value. 
     * @param value Value to set for the keyvaultreferenceid property.
     */
    public set keyvaultreferenceid(value: string | undefined) {
        this._keyvaultreferenceid = value;
    };
    /**
     * Gets the keyvaulturi property value. 
     * @returns a string
     */
    public get keyvaulturi() {
        return this._keyvaulturi;
    };
    /**
     * Sets the keyvaulturi property value. 
     * @param value Value to set for the keyvaulturi property.
     */
    public set keyvaulturi(value: string | undefined) {
        this._keyvaulturi = value;
    };
    /**
     * Gets the managedidentityid property value. 
     * @returns a managedidentity
     */
    public get managedidentityid() {
        return this._managedidentityid;
    };
    /**
     * Sets the managedidentityid property value. 
     * @param value Value to set for the managedidentityid property.
     */
    public set managedidentityid(value: Managedidentity | undefined) {
        this._managedidentityid = value;
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
     * Gets the overwritetime property value. 
     * @returns a Date
     */
    public get overwritetime() {
        return this._overwritetime;
    };
    /**
     * Sets the overwritetime property value. 
     * @param value Value to set for the overwritetime property.
     */
    public set overwritetime(value: Date | undefined) {
        this._overwritetime = value;
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
     * Gets the preauthorizedapplicationtype property value. 
     * @returns a integer
     */
    public get preauthorizedapplicationtype() {
        return this._preauthorizedapplicationtype;
    };
    /**
     * Sets the preauthorizedapplicationtype property value. 
     * @param value Value to set for the preauthorizedapplicationtype property.
     */
    public set preauthorizedapplicationtype(value: number | undefined) {
        this._preauthorizedapplicationtype = value;
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
        writer.writeStringValue("_managedidentityid_value", this._managedidentityid_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("componentidunique", this.componentidunique);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeBooleanValue("isvalidated", this.isvalidated);
        writer.writeStringValue("keyname", this.keyname);
        writer.writeNumberValue("keytype", this.keytype);
        writer.writeCollectionOfObjectValues<Asyncoperation>("keyvaultreference_AsyncOperations", this.keyvaultreference_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("keyvaultreference_BulkDeleteFailures", this.keyvaultreference_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("keyvaultreference_DuplicateBaseRecord", this.keyvaultreference_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("keyvaultreference_DuplicateMatchingRecord", this.keyvaultreference_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Emailserverprofile>("keyvaultreference_emailserverprofile_keyvaultreferenceid", this.keyvaultreference_emailserverprofile_keyvaultreferenceid);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("keyvaultreference_MailboxTrackingFolders", this.keyvaultreference_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Managedidentity>("keyvaultreference_ManagedIdentity", this.keyvaultreference_ManagedIdentity);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("keyvaultreference_PrincipalObjectAttributeAccesses", this.keyvaultreference_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("keyvaultreference_ProcessSession", this.keyvaultreference_ProcessSession);
        writer.writeCollectionOfObjectValues<Serviceendpoint>("keyvaultreference_ServiceEndpoint", this.keyvaultreference_ServiceEndpoint);
        writer.writeCollectionOfObjectValues<Syncerror>("keyvaultreference_SyncErrors", this.keyvaultreference_SyncErrors);
        writer.writeStringValue("keyvaultreferenceid", this.keyvaultreferenceid);
        writer.writeStringValue("keyvaulturi", this.keyvaulturi);
        writer.writeObjectValue<Managedidentity>("managedidentityid", this.managedidentityid);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeNumberValue("preauthorizedapplicationtype", this.preauthorizedapplicationtype);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the solutionid property value. 
     * @returns a string
     */
    public get solutionid() {
        return this._solutionid;
    };
    /**
     * Sets the solutionid property value. 
     * @param value Value to set for the solutionid property.
     */
    public set solutionid(value: string | undefined) {
        this._solutionid = value;
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
