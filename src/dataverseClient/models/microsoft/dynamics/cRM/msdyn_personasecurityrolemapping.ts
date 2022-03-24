import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createRoleFromDiscriminatorValue} from './createRoleFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Organization, Principalobjectattributeaccess, Processsession, Role, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_personasecurityrolemapping extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_securityroleid_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _componentidunique?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _ismanaged?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_personasecurityrolemapping_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_personasecurityrolemapping_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_personasecurityrolemapping_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_personasecurityrolemapping_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_personasecurityrolemapping_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_personasecurityrolemapping_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_personasecurityrolemapping_ProcessSession?: Processsession[] | undefined;
    private _msdyn_personasecurityrolemapping_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_personasecurityrolemappingid?: string | undefined;
    private _msdyn_personatype?: number | undefined;
    private _msdyn_SecurityRoleId?: Role | undefined;
    private _msdyn_uniquename?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _overwritetime?: Date | undefined;
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
     * Gets the _msdyn_securityroleid_value property value. 
     * @returns a string
     */
    public get _msdyn_securityroleid_value() {
        return this.__msdyn_securityroleid_value;
    };
    /**
     * Sets the _msdyn_securityroleid_value property value. 
     * @param value Value to set for the _msdyn_securityroleid_value property.
     */
    public set _msdyn_securityroleid_value(value: string | undefined) {
        this.__msdyn_securityroleid_value = value;
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
     * Instantiates a new msdyn_personasecurityrolemapping and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_personasecurityrolemapping)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_personasecurityrolemapping)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_personasecurityrolemapping)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_personasecurityrolemapping)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_securityroleid_value": (o, n) => { (o as unknown as Msdyn_personasecurityrolemapping)._msdyn_securityroleid_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_personasecurityrolemapping)._organizationid_value = n.getStringValue(); },
            "componentidunique": (o, n) => { (o as unknown as Msdyn_personasecurityrolemapping).componentidunique = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Msdyn_personasecurityrolemapping).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_personasecurityrolemapping).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_personasecurityrolemapping).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_personasecurityrolemapping).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_personasecurityrolemapping).importsequencenumber = n.getNumberValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Msdyn_personasecurityrolemapping).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Msdyn_personasecurityrolemapping).ismanaged = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_personasecurityrolemapping).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_personasecurityrolemapping).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_personasecurityrolemapping).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_personasecurityrolemapping).msdyn_name = n.getStringValue(); },
            "msdyn_personasecurityrolemapping_AsyncOperations": (o, n) => { (o as unknown as Msdyn_personasecurityrolemapping).msdyn_personasecurityrolemapping_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_personasecurityrolemapping_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_personasecurityrolemapping).msdyn_personasecurityrolemapping_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_personasecurityrolemapping_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_personasecurityrolemapping).msdyn_personasecurityrolemapping_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_personasecurityrolemapping_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_personasecurityrolemapping).msdyn_personasecurityrolemapping_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_personasecurityrolemapping_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_personasecurityrolemapping).msdyn_personasecurityrolemapping_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_personasecurityrolemapping_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_personasecurityrolemapping).msdyn_personasecurityrolemapping_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_personasecurityrolemapping_ProcessSession": (o, n) => { (o as unknown as Msdyn_personasecurityrolemapping).msdyn_personasecurityrolemapping_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_personasecurityrolemapping_SyncErrors": (o, n) => { (o as unknown as Msdyn_personasecurityrolemapping).msdyn_personasecurityrolemapping_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_personasecurityrolemappingid": (o, n) => { (o as unknown as Msdyn_personasecurityrolemapping).msdyn_personasecurityrolemappingid = n.getStringValue(); },
            "msdyn_personatype": (o, n) => { (o as unknown as Msdyn_personasecurityrolemapping).msdyn_personatype = n.getNumberValue(); },
            "msdyn_SecurityRoleId": (o, n) => { (o as unknown as Msdyn_personasecurityrolemapping).msdyn_SecurityRoleId = n.getObjectValue<Role>(createRoleFromDiscriminatorValue); },
            "msdyn_uniquename": (o, n) => { (o as unknown as Msdyn_personasecurityrolemapping).msdyn_uniquename = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Msdyn_personasecurityrolemapping).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_personasecurityrolemapping).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Msdyn_personasecurityrolemapping).overwritetime = n.getDateValue(); },
            "solutionid": (o, n) => { (o as unknown as Msdyn_personasecurityrolemapping).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_personasecurityrolemapping).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_personasecurityrolemapping).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_personasecurityrolemapping).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_personasecurityrolemapping).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_personasecurityrolemapping).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_personasecurityrolemapping_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_personasecurityrolemapping_AsyncOperations() {
        return this._msdyn_personasecurityrolemapping_AsyncOperations;
    };
    /**
     * Sets the msdyn_personasecurityrolemapping_AsyncOperations property value. 
     * @param value Value to set for the msdyn_personasecurityrolemapping_AsyncOperations property.
     */
    public set msdyn_personasecurityrolemapping_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_personasecurityrolemapping_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_personasecurityrolemapping_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_personasecurityrolemapping_BulkDeleteFailures() {
        return this._msdyn_personasecurityrolemapping_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_personasecurityrolemapping_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_personasecurityrolemapping_BulkDeleteFailures property.
     */
    public set msdyn_personasecurityrolemapping_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_personasecurityrolemapping_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_personasecurityrolemapping_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_personasecurityrolemapping_DuplicateBaseRecord() {
        return this._msdyn_personasecurityrolemapping_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_personasecurityrolemapping_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_personasecurityrolemapping_DuplicateBaseRecord property.
     */
    public set msdyn_personasecurityrolemapping_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_personasecurityrolemapping_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_personasecurityrolemapping_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_personasecurityrolemapping_DuplicateMatchingRecord() {
        return this._msdyn_personasecurityrolemapping_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_personasecurityrolemapping_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_personasecurityrolemapping_DuplicateMatchingRecord property.
     */
    public set msdyn_personasecurityrolemapping_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_personasecurityrolemapping_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_personasecurityrolemapping_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_personasecurityrolemapping_MailboxTrackingFolders() {
        return this._msdyn_personasecurityrolemapping_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_personasecurityrolemapping_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_personasecurityrolemapping_MailboxTrackingFolders property.
     */
    public set msdyn_personasecurityrolemapping_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_personasecurityrolemapping_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_personasecurityrolemapping_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_personasecurityrolemapping_PrincipalObjectAttributeAccesses() {
        return this._msdyn_personasecurityrolemapping_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_personasecurityrolemapping_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_personasecurityrolemapping_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_personasecurityrolemapping_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_personasecurityrolemapping_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_personasecurityrolemapping_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_personasecurityrolemapping_ProcessSession() {
        return this._msdyn_personasecurityrolemapping_ProcessSession;
    };
    /**
     * Sets the msdyn_personasecurityrolemapping_ProcessSession property value. 
     * @param value Value to set for the msdyn_personasecurityrolemapping_ProcessSession property.
     */
    public set msdyn_personasecurityrolemapping_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_personasecurityrolemapping_ProcessSession = value;
    };
    /**
     * Gets the msdyn_personasecurityrolemapping_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_personasecurityrolemapping_SyncErrors() {
        return this._msdyn_personasecurityrolemapping_SyncErrors;
    };
    /**
     * Sets the msdyn_personasecurityrolemapping_SyncErrors property value. 
     * @param value Value to set for the msdyn_personasecurityrolemapping_SyncErrors property.
     */
    public set msdyn_personasecurityrolemapping_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_personasecurityrolemapping_SyncErrors = value;
    };
    /**
     * Gets the msdyn_personasecurityrolemappingid property value. 
     * @returns a string
     */
    public get msdyn_personasecurityrolemappingid() {
        return this._msdyn_personasecurityrolemappingid;
    };
    /**
     * Sets the msdyn_personasecurityrolemappingid property value. 
     * @param value Value to set for the msdyn_personasecurityrolemappingid property.
     */
    public set msdyn_personasecurityrolemappingid(value: string | undefined) {
        this._msdyn_personasecurityrolemappingid = value;
    };
    /**
     * Gets the msdyn_personatype property value. 
     * @returns a integer
     */
    public get msdyn_personatype() {
        return this._msdyn_personatype;
    };
    /**
     * Sets the msdyn_personatype property value. 
     * @param value Value to set for the msdyn_personatype property.
     */
    public set msdyn_personatype(value: number | undefined) {
        this._msdyn_personatype = value;
    };
    /**
     * Gets the msdyn_SecurityRoleId property value. 
     * @returns a role
     */
    public get msdyn_SecurityRoleId() {
        return this._msdyn_SecurityRoleId;
    };
    /**
     * Sets the msdyn_SecurityRoleId property value. 
     * @param value Value to set for the msdyn_SecurityRoleId property.
     */
    public set msdyn_SecurityRoleId(value: Role | undefined) {
        this._msdyn_SecurityRoleId = value;
    };
    /**
     * Gets the msdyn_uniquename property value. 
     * @returns a string
     */
    public get msdyn_uniquename() {
        return this._msdyn_uniquename;
    };
    /**
     * Sets the msdyn_uniquename property value. 
     * @param value Value to set for the msdyn_uniquename property.
     */
    public set msdyn_uniquename(value: string | undefined) {
        this._msdyn_uniquename = value;
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
        writer.writeStringValue("_msdyn_securityroleid_value", this._msdyn_securityroleid_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("componentidunique", this.componentidunique);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_personasecurityrolemapping_AsyncOperations", this.msdyn_personasecurityrolemapping_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_personasecurityrolemapping_BulkDeleteFailures", this.msdyn_personasecurityrolemapping_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_personasecurityrolemapping_DuplicateBaseRecord", this.msdyn_personasecurityrolemapping_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_personasecurityrolemapping_DuplicateMatchingRecord", this.msdyn_personasecurityrolemapping_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_personasecurityrolemapping_MailboxTrackingFolders", this.msdyn_personasecurityrolemapping_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_personasecurityrolemapping_PrincipalObjectAttributeAccesses", this.msdyn_personasecurityrolemapping_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_personasecurityrolemapping_ProcessSession", this.msdyn_personasecurityrolemapping_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_personasecurityrolemapping_SyncErrors", this.msdyn_personasecurityrolemapping_SyncErrors);
        writer.writeStringValue("msdyn_personasecurityrolemappingid", this.msdyn_personasecurityrolemappingid);
        writer.writeNumberValue("msdyn_personatype", this.msdyn_personatype);
        writer.writeObjectValue<Role>("msdyn_SecurityRoleId", this.msdyn_SecurityRoleId);
        writer.writeStringValue("msdyn_uniquename", this.msdyn_uniquename);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeDateValue("overwritetime", this.overwritetime);
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
