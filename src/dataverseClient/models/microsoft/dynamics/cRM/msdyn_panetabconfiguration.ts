import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_paneconfigurationFromDiscriminatorValue} from './createMsdyn_paneconfigurationFromDiscriminatorValue';
import {createMsdyn_panetoolconfigurationFromDiscriminatorValue} from './createMsdyn_panetoolconfigurationFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_paneconfiguration, Msdyn_panetoolconfiguration, Organization, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_panetabconfiguration extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_productivitypaneid_value?: string | undefined;
    private __msdyn_toolid_value?: string | undefined;
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
    private _msdyn_iconpath?: string | undefined;
    private _msdyn_isenabled?: boolean | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_order?: number | undefined;
    private _msdyn_panetabconfiguration_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_panetabconfiguration_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_panetabconfiguration_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_panetabconfiguration_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_panetabconfiguration_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_panetabconfiguration_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_panetabconfiguration_ProcessSession?: Processsession[] | undefined;
    private _msdyn_panetabconfiguration_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_panetabconfigurationid?: string | undefined;
    private _msdyn_ProductivityPaneId?: Msdyn_paneconfiguration | undefined;
    private _msdyn_ToolId?: Msdyn_panetoolconfiguration | undefined;
    private _msdyn_tooltip?: string | undefined;
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
     * Gets the _msdyn_productivitypaneid_value property value. 
     * @returns a string
     */
    public get _msdyn_productivitypaneid_value() {
        return this.__msdyn_productivitypaneid_value;
    };
    /**
     * Sets the _msdyn_productivitypaneid_value property value. 
     * @param value Value to set for the _msdyn_productivitypaneid_value property.
     */
    public set _msdyn_productivitypaneid_value(value: string | undefined) {
        this.__msdyn_productivitypaneid_value = value;
    };
    /**
     * Gets the _msdyn_toolid_value property value. 
     * @returns a string
     */
    public get _msdyn_toolid_value() {
        return this.__msdyn_toolid_value;
    };
    /**
     * Sets the _msdyn_toolid_value property value. 
     * @param value Value to set for the _msdyn_toolid_value property.
     */
    public set _msdyn_toolid_value(value: string | undefined) {
        this.__msdyn_toolid_value = value;
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
     * Instantiates a new msdyn_panetabconfiguration and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_panetabconfiguration)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_panetabconfiguration)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_panetabconfiguration)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_panetabconfiguration)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_productivitypaneid_value": (o, n) => { (o as unknown as Msdyn_panetabconfiguration)._msdyn_productivitypaneid_value = n.getStringValue(); },
            "_msdyn_toolid_value": (o, n) => { (o as unknown as Msdyn_panetabconfiguration)._msdyn_toolid_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_panetabconfiguration)._organizationid_value = n.getStringValue(); },
            "componentidunique": (o, n) => { (o as unknown as Msdyn_panetabconfiguration).componentidunique = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Msdyn_panetabconfiguration).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_panetabconfiguration).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_panetabconfiguration).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_panetabconfiguration).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_panetabconfiguration).importsequencenumber = n.getNumberValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Msdyn_panetabconfiguration).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Msdyn_panetabconfiguration).ismanaged = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_panetabconfiguration).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_panetabconfiguration).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_panetabconfiguration).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_iconpath": (o, n) => { (o as unknown as Msdyn_panetabconfiguration).msdyn_iconpath = n.getStringValue(); },
            "msdyn_isenabled": (o, n) => { (o as unknown as Msdyn_panetabconfiguration).msdyn_isenabled = n.getBooleanValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_panetabconfiguration).msdyn_name = n.getStringValue(); },
            "msdyn_order": (o, n) => { (o as unknown as Msdyn_panetabconfiguration).msdyn_order = n.getNumberValue(); },
            "msdyn_panetabconfiguration_AsyncOperations": (o, n) => { (o as unknown as Msdyn_panetabconfiguration).msdyn_panetabconfiguration_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_panetabconfiguration_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_panetabconfiguration).msdyn_panetabconfiguration_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_panetabconfiguration_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_panetabconfiguration).msdyn_panetabconfiguration_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_panetabconfiguration_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_panetabconfiguration).msdyn_panetabconfiguration_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_panetabconfiguration_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_panetabconfiguration).msdyn_panetabconfiguration_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_panetabconfiguration_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_panetabconfiguration).msdyn_panetabconfiguration_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_panetabconfiguration_ProcessSession": (o, n) => { (o as unknown as Msdyn_panetabconfiguration).msdyn_panetabconfiguration_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_panetabconfiguration_SyncErrors": (o, n) => { (o as unknown as Msdyn_panetabconfiguration).msdyn_panetabconfiguration_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_panetabconfigurationid": (o, n) => { (o as unknown as Msdyn_panetabconfiguration).msdyn_panetabconfigurationid = n.getStringValue(); },
            "msdyn_ProductivityPaneId": (o, n) => { (o as unknown as Msdyn_panetabconfiguration).msdyn_ProductivityPaneId = n.getObjectValue<Msdyn_paneconfiguration>(createMsdyn_paneconfigurationFromDiscriminatorValue); },
            "msdyn_ToolId": (o, n) => { (o as unknown as Msdyn_panetabconfiguration).msdyn_ToolId = n.getObjectValue<Msdyn_panetoolconfiguration>(createMsdyn_panetoolconfigurationFromDiscriminatorValue); },
            "msdyn_tooltip": (o, n) => { (o as unknown as Msdyn_panetabconfiguration).msdyn_tooltip = n.getStringValue(); },
            "msdyn_uniquename": (o, n) => { (o as unknown as Msdyn_panetabconfiguration).msdyn_uniquename = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Msdyn_panetabconfiguration).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_panetabconfiguration).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Msdyn_panetabconfiguration).overwritetime = n.getDateValue(); },
            "solutionid": (o, n) => { (o as unknown as Msdyn_panetabconfiguration).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_panetabconfiguration).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_panetabconfiguration).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_panetabconfiguration).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_panetabconfiguration).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_panetabconfiguration).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_iconpath property value. 
     * @returns a string
     */
    public get msdyn_iconpath() {
        return this._msdyn_iconpath;
    };
    /**
     * Sets the msdyn_iconpath property value. 
     * @param value Value to set for the msdyn_iconpath property.
     */
    public set msdyn_iconpath(value: string | undefined) {
        this._msdyn_iconpath = value;
    };
    /**
     * Gets the msdyn_isenabled property value. 
     * @returns a boolean
     */
    public get msdyn_isenabled() {
        return this._msdyn_isenabled;
    };
    /**
     * Sets the msdyn_isenabled property value. 
     * @param value Value to set for the msdyn_isenabled property.
     */
    public set msdyn_isenabled(value: boolean | undefined) {
        this._msdyn_isenabled = value;
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
     * Gets the msdyn_order property value. 
     * @returns a integer
     */
    public get msdyn_order() {
        return this._msdyn_order;
    };
    /**
     * Sets the msdyn_order property value. 
     * @param value Value to set for the msdyn_order property.
     */
    public set msdyn_order(value: number | undefined) {
        this._msdyn_order = value;
    };
    /**
     * Gets the msdyn_panetabconfiguration_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_panetabconfiguration_AsyncOperations() {
        return this._msdyn_panetabconfiguration_AsyncOperations;
    };
    /**
     * Sets the msdyn_panetabconfiguration_AsyncOperations property value. 
     * @param value Value to set for the msdyn_panetabconfiguration_AsyncOperations property.
     */
    public set msdyn_panetabconfiguration_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_panetabconfiguration_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_panetabconfiguration_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_panetabconfiguration_BulkDeleteFailures() {
        return this._msdyn_panetabconfiguration_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_panetabconfiguration_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_panetabconfiguration_BulkDeleteFailures property.
     */
    public set msdyn_panetabconfiguration_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_panetabconfiguration_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_panetabconfiguration_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_panetabconfiguration_DuplicateBaseRecord() {
        return this._msdyn_panetabconfiguration_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_panetabconfiguration_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_panetabconfiguration_DuplicateBaseRecord property.
     */
    public set msdyn_panetabconfiguration_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_panetabconfiguration_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_panetabconfiguration_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_panetabconfiguration_DuplicateMatchingRecord() {
        return this._msdyn_panetabconfiguration_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_panetabconfiguration_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_panetabconfiguration_DuplicateMatchingRecord property.
     */
    public set msdyn_panetabconfiguration_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_panetabconfiguration_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_panetabconfiguration_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_panetabconfiguration_MailboxTrackingFolders() {
        return this._msdyn_panetabconfiguration_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_panetabconfiguration_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_panetabconfiguration_MailboxTrackingFolders property.
     */
    public set msdyn_panetabconfiguration_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_panetabconfiguration_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_panetabconfiguration_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_panetabconfiguration_PrincipalObjectAttributeAccesses() {
        return this._msdyn_panetabconfiguration_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_panetabconfiguration_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_panetabconfiguration_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_panetabconfiguration_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_panetabconfiguration_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_panetabconfiguration_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_panetabconfiguration_ProcessSession() {
        return this._msdyn_panetabconfiguration_ProcessSession;
    };
    /**
     * Sets the msdyn_panetabconfiguration_ProcessSession property value. 
     * @param value Value to set for the msdyn_panetabconfiguration_ProcessSession property.
     */
    public set msdyn_panetabconfiguration_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_panetabconfiguration_ProcessSession = value;
    };
    /**
     * Gets the msdyn_panetabconfiguration_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_panetabconfiguration_SyncErrors() {
        return this._msdyn_panetabconfiguration_SyncErrors;
    };
    /**
     * Sets the msdyn_panetabconfiguration_SyncErrors property value. 
     * @param value Value to set for the msdyn_panetabconfiguration_SyncErrors property.
     */
    public set msdyn_panetabconfiguration_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_panetabconfiguration_SyncErrors = value;
    };
    /**
     * Gets the msdyn_panetabconfigurationid property value. 
     * @returns a string
     */
    public get msdyn_panetabconfigurationid() {
        return this._msdyn_panetabconfigurationid;
    };
    /**
     * Sets the msdyn_panetabconfigurationid property value. 
     * @param value Value to set for the msdyn_panetabconfigurationid property.
     */
    public set msdyn_panetabconfigurationid(value: string | undefined) {
        this._msdyn_panetabconfigurationid = value;
    };
    /**
     * Gets the msdyn_ProductivityPaneId property value. 
     * @returns a msdyn_paneconfiguration
     */
    public get msdyn_ProductivityPaneId() {
        return this._msdyn_ProductivityPaneId;
    };
    /**
     * Sets the msdyn_ProductivityPaneId property value. 
     * @param value Value to set for the msdyn_ProductivityPaneId property.
     */
    public set msdyn_ProductivityPaneId(value: Msdyn_paneconfiguration | undefined) {
        this._msdyn_ProductivityPaneId = value;
    };
    /**
     * Gets the msdyn_ToolId property value. 
     * @returns a msdyn_panetoolconfiguration
     */
    public get msdyn_ToolId() {
        return this._msdyn_ToolId;
    };
    /**
     * Sets the msdyn_ToolId property value. 
     * @param value Value to set for the msdyn_ToolId property.
     */
    public set msdyn_ToolId(value: Msdyn_panetoolconfiguration | undefined) {
        this._msdyn_ToolId = value;
    };
    /**
     * Gets the msdyn_tooltip property value. 
     * @returns a string
     */
    public get msdyn_tooltip() {
        return this._msdyn_tooltip;
    };
    /**
     * Sets the msdyn_tooltip property value. 
     * @param value Value to set for the msdyn_tooltip property.
     */
    public set msdyn_tooltip(value: string | undefined) {
        this._msdyn_tooltip = value;
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
        writer.writeStringValue("_msdyn_productivitypaneid_value", this._msdyn_productivitypaneid_value);
        writer.writeStringValue("_msdyn_toolid_value", this._msdyn_toolid_value);
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
        writer.writeStringValue("msdyn_iconpath", this.msdyn_iconpath);
        writer.writeBooleanValue("msdyn_isenabled", this.msdyn_isenabled);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeNumberValue("msdyn_order", this.msdyn_order);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_panetabconfiguration_AsyncOperations", this.msdyn_panetabconfiguration_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_panetabconfiguration_BulkDeleteFailures", this.msdyn_panetabconfiguration_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_panetabconfiguration_DuplicateBaseRecord", this.msdyn_panetabconfiguration_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_panetabconfiguration_DuplicateMatchingRecord", this.msdyn_panetabconfiguration_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_panetabconfiguration_MailboxTrackingFolders", this.msdyn_panetabconfiguration_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_panetabconfiguration_PrincipalObjectAttributeAccesses", this.msdyn_panetabconfiguration_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_panetabconfiguration_ProcessSession", this.msdyn_panetabconfiguration_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_panetabconfiguration_SyncErrors", this.msdyn_panetabconfiguration_SyncErrors);
        writer.writeStringValue("msdyn_panetabconfigurationid", this.msdyn_panetabconfigurationid);
        writer.writeObjectValue<Msdyn_paneconfiguration>("msdyn_ProductivityPaneId", this.msdyn_ProductivityPaneId);
        writer.writeObjectValue<Msdyn_panetoolconfiguration>("msdyn_ToolId", this.msdyn_ToolId);
        writer.writeStringValue("msdyn_tooltip", this.msdyn_tooltip);
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
