import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createEntityFromDiscriminatorValue} from './createEntityFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Crmbaseentity, Duplicaterecord, Entity, Mailboxtrackingfolder, Organization, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Privilegesremovalsetting extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __extensionofrecordid_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _componentidunique?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _extensionofrecordid?: Entity | undefined;
    private _importsequencenumber?: number | undefined;
    private _isappendremoved?: boolean | undefined;
    private _isappendtoremoved?: boolean | undefined;
    private _isassignremoved?: boolean | undefined;
    private _iscreateremoved?: boolean | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _isdeleteremoved?: boolean | undefined;
    private _ismanaged?: boolean | undefined;
    private _isreadremoved?: boolean | undefined;
    private _iswriteremoved?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _overwritetime?: Date | undefined;
    private _privilegesremovalsetting_AsyncOperations?: Asyncoperation[] | undefined;
    private _privilegesremovalsetting_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _privilegesremovalsetting_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _privilegesremovalsetting_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _privilegesremovalsetting_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _privilegesremovalsetting_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _privilegesremovalsetting_ProcessSession?: Processsession[] | undefined;
    private _privilegesremovalsetting_SyncErrors?: Syncerror[] | undefined;
    private _privilegesremovalsettingid?: string | undefined;
    private _solutionid?: string | undefined;
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
     * Gets the _extensionofrecordid_value property value. 
     * @returns a string
     */
    public get _extensionofrecordid_value() {
        return this.__extensionofrecordid_value;
    };
    /**
     * Sets the _extensionofrecordid_value property value. 
     * @param value Value to set for the _extensionofrecordid_value property.
     */
    public set _extensionofrecordid_value(value: string | undefined) {
        this.__extensionofrecordid_value = value;
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
     * Instantiates a new privilegesremovalsetting and sets the default values.
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
     * Gets the extensionofrecordid property value. 
     * @returns a entity
     */
    public get extensionofrecordid() {
        return this._extensionofrecordid;
    };
    /**
     * Sets the extensionofrecordid property value. 
     * @param value Value to set for the extensionofrecordid property.
     */
    public set extensionofrecordid(value: Entity | undefined) {
        this._extensionofrecordid = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Privilegesremovalsetting)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Privilegesremovalsetting)._createdonbehalfby_value = n.getStringValue(); },
            "_extensionofrecordid_value": (o, n) => { (o as unknown as Privilegesremovalsetting)._extensionofrecordid_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Privilegesremovalsetting)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Privilegesremovalsetting)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Privilegesremovalsetting)._organizationid_value = n.getStringValue(); },
            "componentidunique": (o, n) => { (o as unknown as Privilegesremovalsetting).componentidunique = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Privilegesremovalsetting).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Privilegesremovalsetting).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Privilegesremovalsetting).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Privilegesremovalsetting).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "extensionofrecordid": (o, n) => { (o as unknown as Privilegesremovalsetting).extensionofrecordid = n.getObjectValue<Entity>(createEntityFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Privilegesremovalsetting).importsequencenumber = n.getNumberValue(); },
            "isappendremoved": (o, n) => { (o as unknown as Privilegesremovalsetting).isappendremoved = n.getBooleanValue(); },
            "isappendtoremoved": (o, n) => { (o as unknown as Privilegesremovalsetting).isappendtoremoved = n.getBooleanValue(); },
            "isassignremoved": (o, n) => { (o as unknown as Privilegesremovalsetting).isassignremoved = n.getBooleanValue(); },
            "iscreateremoved": (o, n) => { (o as unknown as Privilegesremovalsetting).iscreateremoved = n.getBooleanValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Privilegesremovalsetting).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "isdeleteremoved": (o, n) => { (o as unknown as Privilegesremovalsetting).isdeleteremoved = n.getBooleanValue(); },
            "ismanaged": (o, n) => { (o as unknown as Privilegesremovalsetting).ismanaged = n.getBooleanValue(); },
            "isreadremoved": (o, n) => { (o as unknown as Privilegesremovalsetting).isreadremoved = n.getBooleanValue(); },
            "iswriteremoved": (o, n) => { (o as unknown as Privilegesremovalsetting).iswriteremoved = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Privilegesremovalsetting).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Privilegesremovalsetting).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Privilegesremovalsetting).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Privilegesremovalsetting).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Privilegesremovalsetting).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Privilegesremovalsetting).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Privilegesremovalsetting).overwritetime = n.getDateValue(); },
            "privilegesremovalsetting_AsyncOperations": (o, n) => { (o as unknown as Privilegesremovalsetting).privilegesremovalsetting_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "privilegesremovalsetting_BulkDeleteFailures": (o, n) => { (o as unknown as Privilegesremovalsetting).privilegesremovalsetting_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "privilegesremovalsetting_DuplicateBaseRecord": (o, n) => { (o as unknown as Privilegesremovalsetting).privilegesremovalsetting_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "privilegesremovalsetting_DuplicateMatchingRecord": (o, n) => { (o as unknown as Privilegesremovalsetting).privilegesremovalsetting_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "privilegesremovalsetting_MailboxTrackingFolders": (o, n) => { (o as unknown as Privilegesremovalsetting).privilegesremovalsetting_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "privilegesremovalsetting_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Privilegesremovalsetting).privilegesremovalsetting_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "privilegesremovalsetting_ProcessSession": (o, n) => { (o as unknown as Privilegesremovalsetting).privilegesremovalsetting_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "privilegesremovalsetting_SyncErrors": (o, n) => { (o as unknown as Privilegesremovalsetting).privilegesremovalsetting_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "privilegesremovalsettingid": (o, n) => { (o as unknown as Privilegesremovalsetting).privilegesremovalsettingid = n.getStringValue(); },
            "solutionid": (o, n) => { (o as unknown as Privilegesremovalsetting).solutionid = n.getStringValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Privilegesremovalsetting).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Privilegesremovalsetting).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Privilegesremovalsetting).versionnumber = n.getNumberValue(); },
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
     * Gets the isappendremoved property value. 
     * @returns a boolean
     */
    public get isappendremoved() {
        return this._isappendremoved;
    };
    /**
     * Sets the isappendremoved property value. 
     * @param value Value to set for the isappendremoved property.
     */
    public set isappendremoved(value: boolean | undefined) {
        this._isappendremoved = value;
    };
    /**
     * Gets the isappendtoremoved property value. 
     * @returns a boolean
     */
    public get isappendtoremoved() {
        return this._isappendtoremoved;
    };
    /**
     * Sets the isappendtoremoved property value. 
     * @param value Value to set for the isappendtoremoved property.
     */
    public set isappendtoremoved(value: boolean | undefined) {
        this._isappendtoremoved = value;
    };
    /**
     * Gets the isassignremoved property value. 
     * @returns a boolean
     */
    public get isassignremoved() {
        return this._isassignremoved;
    };
    /**
     * Sets the isassignremoved property value. 
     * @param value Value to set for the isassignremoved property.
     */
    public set isassignremoved(value: boolean | undefined) {
        this._isassignremoved = value;
    };
    /**
     * Gets the iscreateremoved property value. 
     * @returns a boolean
     */
    public get iscreateremoved() {
        return this._iscreateremoved;
    };
    /**
     * Sets the iscreateremoved property value. 
     * @param value Value to set for the iscreateremoved property.
     */
    public set iscreateremoved(value: boolean | undefined) {
        this._iscreateremoved = value;
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
     * Gets the isdeleteremoved property value. 
     * @returns a boolean
     */
    public get isdeleteremoved() {
        return this._isdeleteremoved;
    };
    /**
     * Sets the isdeleteremoved property value. 
     * @param value Value to set for the isdeleteremoved property.
     */
    public set isdeleteremoved(value: boolean | undefined) {
        this._isdeleteremoved = value;
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
     * Gets the isreadremoved property value. 
     * @returns a boolean
     */
    public get isreadremoved() {
        return this._isreadremoved;
    };
    /**
     * Sets the isreadremoved property value. 
     * @param value Value to set for the isreadremoved property.
     */
    public set isreadremoved(value: boolean | undefined) {
        this._isreadremoved = value;
    };
    /**
     * Gets the iswriteremoved property value. 
     * @returns a boolean
     */
    public get iswriteremoved() {
        return this._iswriteremoved;
    };
    /**
     * Sets the iswriteremoved property value. 
     * @param value Value to set for the iswriteremoved property.
     */
    public set iswriteremoved(value: boolean | undefined) {
        this._iswriteremoved = value;
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
     * Gets the name property value. 
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. 
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
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
     * Gets the privilegesremovalsetting_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get privilegesremovalsetting_AsyncOperations() {
        return this._privilegesremovalsetting_AsyncOperations;
    };
    /**
     * Sets the privilegesremovalsetting_AsyncOperations property value. 
     * @param value Value to set for the privilegesremovalsetting_AsyncOperations property.
     */
    public set privilegesremovalsetting_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._privilegesremovalsetting_AsyncOperations = value;
    };
    /**
     * Gets the privilegesremovalsetting_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get privilegesremovalsetting_BulkDeleteFailures() {
        return this._privilegesremovalsetting_BulkDeleteFailures;
    };
    /**
     * Sets the privilegesremovalsetting_BulkDeleteFailures property value. 
     * @param value Value to set for the privilegesremovalsetting_BulkDeleteFailures property.
     */
    public set privilegesremovalsetting_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._privilegesremovalsetting_BulkDeleteFailures = value;
    };
    /**
     * Gets the privilegesremovalsetting_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get privilegesremovalsetting_DuplicateBaseRecord() {
        return this._privilegesremovalsetting_DuplicateBaseRecord;
    };
    /**
     * Sets the privilegesremovalsetting_DuplicateBaseRecord property value. 
     * @param value Value to set for the privilegesremovalsetting_DuplicateBaseRecord property.
     */
    public set privilegesremovalsetting_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._privilegesremovalsetting_DuplicateBaseRecord = value;
    };
    /**
     * Gets the privilegesremovalsetting_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get privilegesremovalsetting_DuplicateMatchingRecord() {
        return this._privilegesremovalsetting_DuplicateMatchingRecord;
    };
    /**
     * Sets the privilegesremovalsetting_DuplicateMatchingRecord property value. 
     * @param value Value to set for the privilegesremovalsetting_DuplicateMatchingRecord property.
     */
    public set privilegesremovalsetting_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._privilegesremovalsetting_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the privilegesremovalsetting_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get privilegesremovalsetting_MailboxTrackingFolders() {
        return this._privilegesremovalsetting_MailboxTrackingFolders;
    };
    /**
     * Sets the privilegesremovalsetting_MailboxTrackingFolders property value. 
     * @param value Value to set for the privilegesremovalsetting_MailboxTrackingFolders property.
     */
    public set privilegesremovalsetting_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._privilegesremovalsetting_MailboxTrackingFolders = value;
    };
    /**
     * Gets the privilegesremovalsetting_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get privilegesremovalsetting_PrincipalObjectAttributeAccesses() {
        return this._privilegesremovalsetting_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the privilegesremovalsetting_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the privilegesremovalsetting_PrincipalObjectAttributeAccesses property.
     */
    public set privilegesremovalsetting_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._privilegesremovalsetting_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the privilegesremovalsetting_ProcessSession property value. 
     * @returns a processsession
     */
    public get privilegesremovalsetting_ProcessSession() {
        return this._privilegesremovalsetting_ProcessSession;
    };
    /**
     * Sets the privilegesremovalsetting_ProcessSession property value. 
     * @param value Value to set for the privilegesremovalsetting_ProcessSession property.
     */
    public set privilegesremovalsetting_ProcessSession(value: Processsession[] | undefined) {
        this._privilegesremovalsetting_ProcessSession = value;
    };
    /**
     * Gets the privilegesremovalsetting_SyncErrors property value. 
     * @returns a syncerror
     */
    public get privilegesremovalsetting_SyncErrors() {
        return this._privilegesremovalsetting_SyncErrors;
    };
    /**
     * Sets the privilegesremovalsetting_SyncErrors property value. 
     * @param value Value to set for the privilegesremovalsetting_SyncErrors property.
     */
    public set privilegesremovalsetting_SyncErrors(value: Syncerror[] | undefined) {
        this._privilegesremovalsetting_SyncErrors = value;
    };
    /**
     * Gets the privilegesremovalsettingid property value. 
     * @returns a string
     */
    public get privilegesremovalsettingid() {
        return this._privilegesremovalsettingid;
    };
    /**
     * Sets the privilegesremovalsettingid property value. 
     * @param value Value to set for the privilegesremovalsettingid property.
     */
    public set privilegesremovalsettingid(value: string | undefined) {
        this._privilegesremovalsettingid = value;
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
        writer.writeStringValue("_extensionofrecordid_value", this._extensionofrecordid_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("componentidunique", this.componentidunique);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeObjectValue<Entity>("extensionofrecordid", this.extensionofrecordid);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeBooleanValue("isappendremoved", this.isappendremoved);
        writer.writeBooleanValue("isappendtoremoved", this.isappendtoremoved);
        writer.writeBooleanValue("isassignremoved", this.isassignremoved);
        writer.writeBooleanValue("iscreateremoved", this.iscreateremoved);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeBooleanValue("isdeleteremoved", this.isdeleteremoved);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeBooleanValue("isreadremoved", this.isreadremoved);
        writer.writeBooleanValue("iswriteremoved", this.iswriteremoved);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeCollectionOfObjectValues<Asyncoperation>("privilegesremovalsetting_AsyncOperations", this.privilegesremovalsetting_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("privilegesremovalsetting_BulkDeleteFailures", this.privilegesremovalsetting_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("privilegesremovalsetting_DuplicateBaseRecord", this.privilegesremovalsetting_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("privilegesremovalsetting_DuplicateMatchingRecord", this.privilegesremovalsetting_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("privilegesremovalsetting_MailboxTrackingFolders", this.privilegesremovalsetting_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("privilegesremovalsetting_PrincipalObjectAttributeAccesses", this.privilegesremovalsetting_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("privilegesremovalsetting_ProcessSession", this.privilegesremovalsetting_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("privilegesremovalsetting_SyncErrors", this.privilegesremovalsetting_SyncErrors);
        writer.writeStringValue("privilegesremovalsettingid", this.privilegesremovalsettingid);
        writer.writeStringValue("solutionid", this.solutionid);
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
