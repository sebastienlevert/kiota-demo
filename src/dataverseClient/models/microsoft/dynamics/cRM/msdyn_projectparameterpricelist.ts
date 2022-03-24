import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_projectparameterFromDiscriminatorValue} from './createMsdyn_projectparameterFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPricelevelFromDiscriminatorValue} from './createPricelevelFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Annotation, Asyncoperation, Bulkdeletefailure, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_projectparameter, Organization, Pricelevel, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_projectparameterpricelist extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_pricelist_value?: string | undefined;
    private __msdyn_projectparameter_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_description?: string | undefined;
    private _msdyn_PriceList?: Pricelevel | undefined;
    private _msdyn_ProjectParameter?: Msdyn_projectparameter | undefined;
    private _msdyn_projectparameterpricelist_Annotations?: Annotation[] | undefined;
    private _msdyn_projectparameterpricelist_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_projectparameterpricelist_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_projectparameterpricelist_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_projectparameterpricelist_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_projectparameterpricelist_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_projectparameterpricelist_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_projectparameterpricelist_ProcessSession?: Processsession[] | undefined;
    private _msdyn_projectparameterpricelist_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_projectparameterpricelistid?: string | undefined;
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
     * Gets the _msdyn_pricelist_value property value. 
     * @returns a string
     */
    public get _msdyn_pricelist_value() {
        return this.__msdyn_pricelist_value;
    };
    /**
     * Sets the _msdyn_pricelist_value property value. 
     * @param value Value to set for the _msdyn_pricelist_value property.
     */
    public set _msdyn_pricelist_value(value: string | undefined) {
        this.__msdyn_pricelist_value = value;
    };
    /**
     * Gets the _msdyn_projectparameter_value property value. 
     * @returns a string
     */
    public get _msdyn_projectparameter_value() {
        return this.__msdyn_projectparameter_value;
    };
    /**
     * Sets the _msdyn_projectparameter_value property value. 
     * @param value Value to set for the _msdyn_projectparameter_value property.
     */
    public set _msdyn_projectparameter_value(value: string | undefined) {
        this.__msdyn_projectparameter_value = value;
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
     * Instantiates a new msdyn_projectparameterpricelist and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_projectparameterpricelist)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_projectparameterpricelist)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_projectparameterpricelist)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_projectparameterpricelist)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_pricelist_value": (o, n) => { (o as unknown as Msdyn_projectparameterpricelist)._msdyn_pricelist_value = n.getStringValue(); },
            "_msdyn_projectparameter_value": (o, n) => { (o as unknown as Msdyn_projectparameterpricelist)._msdyn_projectparameter_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_projectparameterpricelist)._organizationid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_projectparameterpricelist).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_projectparameterpricelist).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_projectparameterpricelist).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_projectparameterpricelist).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_projectparameterpricelist).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_projectparameterpricelist).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_projectparameterpricelist).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_description": (o, n) => { (o as unknown as Msdyn_projectparameterpricelist).msdyn_description = n.getStringValue(); },
            "msdyn_PriceList": (o, n) => { (o as unknown as Msdyn_projectparameterpricelist).msdyn_PriceList = n.getObjectValue<Pricelevel>(createPricelevelFromDiscriminatorValue); },
            "msdyn_ProjectParameter": (o, n) => { (o as unknown as Msdyn_projectparameterpricelist).msdyn_ProjectParameter = n.getObjectValue<Msdyn_projectparameter>(createMsdyn_projectparameterFromDiscriminatorValue); },
            "msdyn_projectparameterpricelist_Annotations": (o, n) => { (o as unknown as Msdyn_projectparameterpricelist).msdyn_projectparameterpricelist_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_projectparameterpricelist_AsyncOperations": (o, n) => { (o as unknown as Msdyn_projectparameterpricelist).msdyn_projectparameterpricelist_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_projectparameterpricelist_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_projectparameterpricelist).msdyn_projectparameterpricelist_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_projectparameterpricelist_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_projectparameterpricelist).msdyn_projectparameterpricelist_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_projectparameterpricelist_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_projectparameterpricelist).msdyn_projectparameterpricelist_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_projectparameterpricelist_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_projectparameterpricelist).msdyn_projectparameterpricelist_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_projectparameterpricelist_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_projectparameterpricelist).msdyn_projectparameterpricelist_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_projectparameterpricelist_ProcessSession": (o, n) => { (o as unknown as Msdyn_projectparameterpricelist).msdyn_projectparameterpricelist_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_projectparameterpricelist_SyncErrors": (o, n) => { (o as unknown as Msdyn_projectparameterpricelist).msdyn_projectparameterpricelist_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_projectparameterpricelistid": (o, n) => { (o as unknown as Msdyn_projectparameterpricelist).msdyn_projectparameterpricelistid = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Msdyn_projectparameterpricelist).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_projectparameterpricelist).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_projectparameterpricelist).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_projectparameterpricelist).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_projectparameterpricelist).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_projectparameterpricelist).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_projectparameterpricelist).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_description property value. 
     * @returns a string
     */
    public get msdyn_description() {
        return this._msdyn_description;
    };
    /**
     * Sets the msdyn_description property value. 
     * @param value Value to set for the msdyn_description property.
     */
    public set msdyn_description(value: string | undefined) {
        this._msdyn_description = value;
    };
    /**
     * Gets the msdyn_PriceList property value. 
     * @returns a pricelevel
     */
    public get msdyn_PriceList() {
        return this._msdyn_PriceList;
    };
    /**
     * Sets the msdyn_PriceList property value. 
     * @param value Value to set for the msdyn_PriceList property.
     */
    public set msdyn_PriceList(value: Pricelevel | undefined) {
        this._msdyn_PriceList = value;
    };
    /**
     * Gets the msdyn_ProjectParameter property value. 
     * @returns a msdyn_projectparameter
     */
    public get msdyn_ProjectParameter() {
        return this._msdyn_ProjectParameter;
    };
    /**
     * Sets the msdyn_ProjectParameter property value. 
     * @param value Value to set for the msdyn_ProjectParameter property.
     */
    public set msdyn_ProjectParameter(value: Msdyn_projectparameter | undefined) {
        this._msdyn_ProjectParameter = value;
    };
    /**
     * Gets the msdyn_projectparameterpricelist_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_projectparameterpricelist_Annotations() {
        return this._msdyn_projectparameterpricelist_Annotations;
    };
    /**
     * Sets the msdyn_projectparameterpricelist_Annotations property value. 
     * @param value Value to set for the msdyn_projectparameterpricelist_Annotations property.
     */
    public set msdyn_projectparameterpricelist_Annotations(value: Annotation[] | undefined) {
        this._msdyn_projectparameterpricelist_Annotations = value;
    };
    /**
     * Gets the msdyn_projectparameterpricelist_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_projectparameterpricelist_AsyncOperations() {
        return this._msdyn_projectparameterpricelist_AsyncOperations;
    };
    /**
     * Sets the msdyn_projectparameterpricelist_AsyncOperations property value. 
     * @param value Value to set for the msdyn_projectparameterpricelist_AsyncOperations property.
     */
    public set msdyn_projectparameterpricelist_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_projectparameterpricelist_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_projectparameterpricelist_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_projectparameterpricelist_BulkDeleteFailures() {
        return this._msdyn_projectparameterpricelist_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_projectparameterpricelist_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_projectparameterpricelist_BulkDeleteFailures property.
     */
    public set msdyn_projectparameterpricelist_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_projectparameterpricelist_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_projectparameterpricelist_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_projectparameterpricelist_DuplicateBaseRecord() {
        return this._msdyn_projectparameterpricelist_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_projectparameterpricelist_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_projectparameterpricelist_DuplicateBaseRecord property.
     */
    public set msdyn_projectparameterpricelist_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_projectparameterpricelist_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_projectparameterpricelist_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_projectparameterpricelist_DuplicateMatchingRecord() {
        return this._msdyn_projectparameterpricelist_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_projectparameterpricelist_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_projectparameterpricelist_DuplicateMatchingRecord property.
     */
    public set msdyn_projectparameterpricelist_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_projectparameterpricelist_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_projectparameterpricelist_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_projectparameterpricelist_MailboxTrackingFolders() {
        return this._msdyn_projectparameterpricelist_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_projectparameterpricelist_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_projectparameterpricelist_MailboxTrackingFolders property.
     */
    public set msdyn_projectparameterpricelist_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_projectparameterpricelist_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_projectparameterpricelist_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_projectparameterpricelist_PrincipalObjectAttributeAccesses() {
        return this._msdyn_projectparameterpricelist_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_projectparameterpricelist_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_projectparameterpricelist_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_projectparameterpricelist_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_projectparameterpricelist_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_projectparameterpricelist_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_projectparameterpricelist_ProcessSession() {
        return this._msdyn_projectparameterpricelist_ProcessSession;
    };
    /**
     * Sets the msdyn_projectparameterpricelist_ProcessSession property value. 
     * @param value Value to set for the msdyn_projectparameterpricelist_ProcessSession property.
     */
    public set msdyn_projectparameterpricelist_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_projectparameterpricelist_ProcessSession = value;
    };
    /**
     * Gets the msdyn_projectparameterpricelist_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_projectparameterpricelist_SyncErrors() {
        return this._msdyn_projectparameterpricelist_SyncErrors;
    };
    /**
     * Sets the msdyn_projectparameterpricelist_SyncErrors property value. 
     * @param value Value to set for the msdyn_projectparameterpricelist_SyncErrors property.
     */
    public set msdyn_projectparameterpricelist_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_projectparameterpricelist_SyncErrors = value;
    };
    /**
     * Gets the msdyn_projectparameterpricelistid property value. 
     * @returns a string
     */
    public get msdyn_projectparameterpricelistid() {
        return this._msdyn_projectparameterpricelistid;
    };
    /**
     * Sets the msdyn_projectparameterpricelistid property value. 
     * @param value Value to set for the msdyn_projectparameterpricelistid property.
     */
    public set msdyn_projectparameterpricelistid(value: string | undefined) {
        this._msdyn_projectparameterpricelistid = value;
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
        writer.writeStringValue("_msdyn_pricelist_value", this._msdyn_pricelist_value);
        writer.writeStringValue("_msdyn_projectparameter_value", this._msdyn_projectparameter_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("msdyn_description", this.msdyn_description);
        writer.writeObjectValue<Pricelevel>("msdyn_PriceList", this.msdyn_PriceList);
        writer.writeObjectValue<Msdyn_projectparameter>("msdyn_ProjectParameter", this.msdyn_ProjectParameter);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_projectparameterpricelist_Annotations", this.msdyn_projectparameterpricelist_Annotations);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_projectparameterpricelist_AsyncOperations", this.msdyn_projectparameterpricelist_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_projectparameterpricelist_BulkDeleteFailures", this.msdyn_projectparameterpricelist_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_projectparameterpricelist_DuplicateBaseRecord", this.msdyn_projectparameterpricelist_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_projectparameterpricelist_DuplicateMatchingRecord", this.msdyn_projectparameterpricelist_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_projectparameterpricelist_MailboxTrackingFolders", this.msdyn_projectparameterpricelist_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_projectparameterpricelist_PrincipalObjectAttributeAccesses", this.msdyn_projectparameterpricelist_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_projectparameterpricelist_ProcessSession", this.msdyn_projectparameterpricelist_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_projectparameterpricelist_SyncErrors", this.msdyn_projectparameterpricelist_SyncErrors);
        writer.writeStringValue("msdyn_projectparameterpricelistid", this.msdyn_projectparameterpricelistid);
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
