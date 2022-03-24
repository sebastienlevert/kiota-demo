import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_upgradeversionFromDiscriminatorValue} from './createMsdyn_upgradeversionFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Mailboxtrackingfolder, Msdyn_upgradeversion, Organization, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_upgraderun extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_error?: string | undefined;
    private _msdyn_finished?: Date | undefined;
    private _msdyn_msdyn_upgraderun_msdyn_upgradeversion_UpgradeRun?: Msdyn_upgradeversion[] | undefined;
    private _msdyn_package?: string | undefined;
    private _msdyn_solution?: string | undefined;
    private _msdyn_startingversion?: string | undefined;
    private _msdyn_status?: number | undefined;
    private _msdyn_summary?: string | undefined;
    private _msdyn_targetversion?: string | undefined;
    private _msdyn_upgraderun_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_upgraderun_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_upgraderun_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_upgraderun_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_upgraderun_ProcessSession?: Processsession[] | undefined;
    private _msdyn_upgraderun_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_upgraderunid?: string | undefined;
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
     * Instantiates a new msdyn_upgraderun and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_upgraderun)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_upgraderun)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_upgraderun)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_upgraderun)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_upgraderun)._organizationid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_upgraderun).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_upgraderun).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_upgraderun).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_upgraderun).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_upgraderun).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_upgraderun).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_upgraderun).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_error": (o, n) => { (o as unknown as Msdyn_upgraderun).msdyn_error = n.getStringValue(); },
            "msdyn_finished": (o, n) => { (o as unknown as Msdyn_upgraderun).msdyn_finished = n.getDateValue(); },
            "msdyn_msdyn_upgraderun_msdyn_upgradeversion_UpgradeRun": (o, n) => { (o as unknown as Msdyn_upgraderun).msdyn_msdyn_upgraderun_msdyn_upgradeversion_UpgradeRun = n.getCollectionOfObjectValues<Msdyn_upgradeversion>(createMsdyn_upgradeversionFromDiscriminatorValue); },
            "msdyn_package": (o, n) => { (o as unknown as Msdyn_upgraderun).msdyn_package = n.getStringValue(); },
            "msdyn_solution": (o, n) => { (o as unknown as Msdyn_upgraderun).msdyn_solution = n.getStringValue(); },
            "msdyn_startingversion": (o, n) => { (o as unknown as Msdyn_upgraderun).msdyn_startingversion = n.getStringValue(); },
            "msdyn_status": (o, n) => { (o as unknown as Msdyn_upgraderun).msdyn_status = n.getNumberValue(); },
            "msdyn_summary": (o, n) => { (o as unknown as Msdyn_upgraderun).msdyn_summary = n.getStringValue(); },
            "msdyn_targetversion": (o, n) => { (o as unknown as Msdyn_upgraderun).msdyn_targetversion = n.getStringValue(); },
            "msdyn_upgraderun_AsyncOperations": (o, n) => { (o as unknown as Msdyn_upgraderun).msdyn_upgraderun_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_upgraderun_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_upgraderun).msdyn_upgraderun_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_upgraderun_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_upgraderun).msdyn_upgraderun_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_upgraderun_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_upgraderun).msdyn_upgraderun_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_upgraderun_ProcessSession": (o, n) => { (o as unknown as Msdyn_upgraderun).msdyn_upgraderun_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_upgraderun_SyncErrors": (o, n) => { (o as unknown as Msdyn_upgraderun).msdyn_upgraderun_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_upgraderunid": (o, n) => { (o as unknown as Msdyn_upgraderun).msdyn_upgraderunid = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Msdyn_upgraderun).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_upgraderun).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_upgraderun).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_upgraderun).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_upgraderun).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_upgraderun).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_upgraderun).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_error property value. 
     * @returns a string
     */
    public get msdyn_error() {
        return this._msdyn_error;
    };
    /**
     * Sets the msdyn_error property value. 
     * @param value Value to set for the msdyn_error property.
     */
    public set msdyn_error(value: string | undefined) {
        this._msdyn_error = value;
    };
    /**
     * Gets the msdyn_finished property value. 
     * @returns a Date
     */
    public get msdyn_finished() {
        return this._msdyn_finished;
    };
    /**
     * Sets the msdyn_finished property value. 
     * @param value Value to set for the msdyn_finished property.
     */
    public set msdyn_finished(value: Date | undefined) {
        this._msdyn_finished = value;
    };
    /**
     * Gets the msdyn_msdyn_upgraderun_msdyn_upgradeversion_UpgradeRun property value. 
     * @returns a msdyn_upgradeversion
     */
    public get msdyn_msdyn_upgraderun_msdyn_upgradeversion_UpgradeRun() {
        return this._msdyn_msdyn_upgraderun_msdyn_upgradeversion_UpgradeRun;
    };
    /**
     * Sets the msdyn_msdyn_upgraderun_msdyn_upgradeversion_UpgradeRun property value. 
     * @param value Value to set for the msdyn_msdyn_upgraderun_msdyn_upgradeversion_UpgradeRun property.
     */
    public set msdyn_msdyn_upgraderun_msdyn_upgradeversion_UpgradeRun(value: Msdyn_upgradeversion[] | undefined) {
        this._msdyn_msdyn_upgraderun_msdyn_upgradeversion_UpgradeRun = value;
    };
    /**
     * Gets the msdyn_package property value. 
     * @returns a string
     */
    public get msdyn_package() {
        return this._msdyn_package;
    };
    /**
     * Sets the msdyn_package property value. 
     * @param value Value to set for the msdyn_package property.
     */
    public set msdyn_package(value: string | undefined) {
        this._msdyn_package = value;
    };
    /**
     * Gets the msdyn_solution property value. 
     * @returns a string
     */
    public get msdyn_solution() {
        return this._msdyn_solution;
    };
    /**
     * Sets the msdyn_solution property value. 
     * @param value Value to set for the msdyn_solution property.
     */
    public set msdyn_solution(value: string | undefined) {
        this._msdyn_solution = value;
    };
    /**
     * Gets the msdyn_startingversion property value. 
     * @returns a string
     */
    public get msdyn_startingversion() {
        return this._msdyn_startingversion;
    };
    /**
     * Sets the msdyn_startingversion property value. 
     * @param value Value to set for the msdyn_startingversion property.
     */
    public set msdyn_startingversion(value: string | undefined) {
        this._msdyn_startingversion = value;
    };
    /**
     * Gets the msdyn_status property value. 
     * @returns a integer
     */
    public get msdyn_status() {
        return this._msdyn_status;
    };
    /**
     * Sets the msdyn_status property value. 
     * @param value Value to set for the msdyn_status property.
     */
    public set msdyn_status(value: number | undefined) {
        this._msdyn_status = value;
    };
    /**
     * Gets the msdyn_summary property value. 
     * @returns a string
     */
    public get msdyn_summary() {
        return this._msdyn_summary;
    };
    /**
     * Sets the msdyn_summary property value. 
     * @param value Value to set for the msdyn_summary property.
     */
    public set msdyn_summary(value: string | undefined) {
        this._msdyn_summary = value;
    };
    /**
     * Gets the msdyn_targetversion property value. 
     * @returns a string
     */
    public get msdyn_targetversion() {
        return this._msdyn_targetversion;
    };
    /**
     * Sets the msdyn_targetversion property value. 
     * @param value Value to set for the msdyn_targetversion property.
     */
    public set msdyn_targetversion(value: string | undefined) {
        this._msdyn_targetversion = value;
    };
    /**
     * Gets the msdyn_upgraderun_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_upgraderun_AsyncOperations() {
        return this._msdyn_upgraderun_AsyncOperations;
    };
    /**
     * Sets the msdyn_upgraderun_AsyncOperations property value. 
     * @param value Value to set for the msdyn_upgraderun_AsyncOperations property.
     */
    public set msdyn_upgraderun_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_upgraderun_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_upgraderun_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_upgraderun_BulkDeleteFailures() {
        return this._msdyn_upgraderun_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_upgraderun_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_upgraderun_BulkDeleteFailures property.
     */
    public set msdyn_upgraderun_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_upgraderun_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_upgraderun_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_upgraderun_MailboxTrackingFolders() {
        return this._msdyn_upgraderun_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_upgraderun_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_upgraderun_MailboxTrackingFolders property.
     */
    public set msdyn_upgraderun_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_upgraderun_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_upgraderun_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_upgraderun_PrincipalObjectAttributeAccesses() {
        return this._msdyn_upgraderun_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_upgraderun_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_upgraderun_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_upgraderun_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_upgraderun_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_upgraderun_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_upgraderun_ProcessSession() {
        return this._msdyn_upgraderun_ProcessSession;
    };
    /**
     * Sets the msdyn_upgraderun_ProcessSession property value. 
     * @param value Value to set for the msdyn_upgraderun_ProcessSession property.
     */
    public set msdyn_upgraderun_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_upgraderun_ProcessSession = value;
    };
    /**
     * Gets the msdyn_upgraderun_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_upgraderun_SyncErrors() {
        return this._msdyn_upgraderun_SyncErrors;
    };
    /**
     * Sets the msdyn_upgraderun_SyncErrors property value. 
     * @param value Value to set for the msdyn_upgraderun_SyncErrors property.
     */
    public set msdyn_upgraderun_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_upgraderun_SyncErrors = value;
    };
    /**
     * Gets the msdyn_upgraderunid property value. 
     * @returns a string
     */
    public get msdyn_upgraderunid() {
        return this._msdyn_upgraderunid;
    };
    /**
     * Sets the msdyn_upgraderunid property value. 
     * @param value Value to set for the msdyn_upgraderunid property.
     */
    public set msdyn_upgraderunid(value: string | undefined) {
        this._msdyn_upgraderunid = value;
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
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("msdyn_error", this.msdyn_error);
        writer.writeDateValue("msdyn_finished", this.msdyn_finished);
        writer.writeCollectionOfObjectValues<Msdyn_upgradeversion>("msdyn_msdyn_upgraderun_msdyn_upgradeversion_UpgradeRun", this.msdyn_msdyn_upgraderun_msdyn_upgradeversion_UpgradeRun);
        writer.writeStringValue("msdyn_package", this.msdyn_package);
        writer.writeStringValue("msdyn_solution", this.msdyn_solution);
        writer.writeStringValue("msdyn_startingversion", this.msdyn_startingversion);
        writer.writeNumberValue("msdyn_status", this.msdyn_status);
        writer.writeStringValue("msdyn_summary", this.msdyn_summary);
        writer.writeStringValue("msdyn_targetversion", this.msdyn_targetversion);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_upgraderun_AsyncOperations", this.msdyn_upgraderun_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_upgraderun_BulkDeleteFailures", this.msdyn_upgraderun_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_upgraderun_MailboxTrackingFolders", this.msdyn_upgraderun_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_upgraderun_PrincipalObjectAttributeAccesses", this.msdyn_upgraderun_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_upgraderun_ProcessSession", this.msdyn_upgraderun_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_upgraderun_SyncErrors", this.msdyn_upgraderun_SyncErrors);
        writer.writeStringValue("msdyn_upgraderunid", this.msdyn_upgraderunid);
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
