import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_upgraderunFromDiscriminatorValue} from './createMsdyn_upgraderunFromDiscriminatorValue';
import {createMsdyn_upgradestepFromDiscriminatorValue} from './createMsdyn_upgradestepFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Mailboxtrackingfolder, Msdyn_upgraderun, Msdyn_upgradestep, Organization, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_upgradeversion extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_upgraderun_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_finished?: Date | undefined;
    private _msdyn_msdyn_upgradeversion_msdyn_upgradestep_UpgradeVersion?: Msdyn_upgradestep[] | undefined;
    private _msdyn_startingversion?: string | undefined;
    private _msdyn_status?: number | undefined;
    private _msdyn_summary?: string | undefined;
    private _msdyn_targetversion?: string | undefined;
    private _msdyn_UpgradeRun?: Msdyn_upgraderun | undefined;
    private _msdyn_upgradeversion_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_upgradeversion_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_upgradeversion_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_upgradeversion_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_upgradeversion_ProcessSession?: Processsession[] | undefined;
    private _msdyn_upgradeversion_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_upgradeversionid?: string | undefined;
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
     * Gets the _msdyn_upgraderun_value property value. 
     * @returns a string
     */
    public get _msdyn_upgraderun_value() {
        return this.__msdyn_upgraderun_value;
    };
    /**
     * Sets the _msdyn_upgraderun_value property value. 
     * @param value Value to set for the _msdyn_upgraderun_value property.
     */
    public set _msdyn_upgraderun_value(value: string | undefined) {
        this.__msdyn_upgraderun_value = value;
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
     * Instantiates a new msdyn_upgradeversion and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_upgradeversion)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_upgradeversion)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_upgradeversion)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_upgradeversion)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_upgraderun_value": (o, n) => { (o as unknown as Msdyn_upgradeversion)._msdyn_upgraderun_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_upgradeversion)._organizationid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_upgradeversion).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_upgradeversion).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_upgradeversion).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_upgradeversion).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_upgradeversion).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_upgradeversion).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_upgradeversion).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_finished": (o, n) => { (o as unknown as Msdyn_upgradeversion).msdyn_finished = n.getDateValue(); },
            "msdyn_msdyn_upgradeversion_msdyn_upgradestep_UpgradeVersion": (o, n) => { (o as unknown as Msdyn_upgradeversion).msdyn_msdyn_upgradeversion_msdyn_upgradestep_UpgradeVersion = n.getCollectionOfObjectValues<Msdyn_upgradestep>(createMsdyn_upgradestepFromDiscriminatorValue); },
            "msdyn_startingversion": (o, n) => { (o as unknown as Msdyn_upgradeversion).msdyn_startingversion = n.getStringValue(); },
            "msdyn_status": (o, n) => { (o as unknown as Msdyn_upgradeversion).msdyn_status = n.getNumberValue(); },
            "msdyn_summary": (o, n) => { (o as unknown as Msdyn_upgradeversion).msdyn_summary = n.getStringValue(); },
            "msdyn_targetversion": (o, n) => { (o as unknown as Msdyn_upgradeversion).msdyn_targetversion = n.getStringValue(); },
            "msdyn_UpgradeRun": (o, n) => { (o as unknown as Msdyn_upgradeversion).msdyn_UpgradeRun = n.getObjectValue<Msdyn_upgraderun>(createMsdyn_upgraderunFromDiscriminatorValue); },
            "msdyn_upgradeversion_AsyncOperations": (o, n) => { (o as unknown as Msdyn_upgradeversion).msdyn_upgradeversion_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_upgradeversion_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_upgradeversion).msdyn_upgradeversion_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_upgradeversion_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_upgradeversion).msdyn_upgradeversion_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_upgradeversion_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_upgradeversion).msdyn_upgradeversion_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_upgradeversion_ProcessSession": (o, n) => { (o as unknown as Msdyn_upgradeversion).msdyn_upgradeversion_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_upgradeversion_SyncErrors": (o, n) => { (o as unknown as Msdyn_upgradeversion).msdyn_upgradeversion_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_upgradeversionid": (o, n) => { (o as unknown as Msdyn_upgradeversion).msdyn_upgradeversionid = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Msdyn_upgradeversion).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_upgradeversion).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_upgradeversion).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_upgradeversion).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_upgradeversion).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_upgradeversion).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_upgradeversion).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_msdyn_upgradeversion_msdyn_upgradestep_UpgradeVersion property value. 
     * @returns a msdyn_upgradestep
     */
    public get msdyn_msdyn_upgradeversion_msdyn_upgradestep_UpgradeVersion() {
        return this._msdyn_msdyn_upgradeversion_msdyn_upgradestep_UpgradeVersion;
    };
    /**
     * Sets the msdyn_msdyn_upgradeversion_msdyn_upgradestep_UpgradeVersion property value. 
     * @param value Value to set for the msdyn_msdyn_upgradeversion_msdyn_upgradestep_UpgradeVersion property.
     */
    public set msdyn_msdyn_upgradeversion_msdyn_upgradestep_UpgradeVersion(value: Msdyn_upgradestep[] | undefined) {
        this._msdyn_msdyn_upgradeversion_msdyn_upgradestep_UpgradeVersion = value;
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
     * Gets the msdyn_UpgradeRun property value. 
     * @returns a msdyn_upgraderun
     */
    public get msdyn_UpgradeRun() {
        return this._msdyn_UpgradeRun;
    };
    /**
     * Sets the msdyn_UpgradeRun property value. 
     * @param value Value to set for the msdyn_UpgradeRun property.
     */
    public set msdyn_UpgradeRun(value: Msdyn_upgraderun | undefined) {
        this._msdyn_UpgradeRun = value;
    };
    /**
     * Gets the msdyn_upgradeversion_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_upgradeversion_AsyncOperations() {
        return this._msdyn_upgradeversion_AsyncOperations;
    };
    /**
     * Sets the msdyn_upgradeversion_AsyncOperations property value. 
     * @param value Value to set for the msdyn_upgradeversion_AsyncOperations property.
     */
    public set msdyn_upgradeversion_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_upgradeversion_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_upgradeversion_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_upgradeversion_BulkDeleteFailures() {
        return this._msdyn_upgradeversion_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_upgradeversion_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_upgradeversion_BulkDeleteFailures property.
     */
    public set msdyn_upgradeversion_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_upgradeversion_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_upgradeversion_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_upgradeversion_MailboxTrackingFolders() {
        return this._msdyn_upgradeversion_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_upgradeversion_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_upgradeversion_MailboxTrackingFolders property.
     */
    public set msdyn_upgradeversion_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_upgradeversion_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_upgradeversion_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_upgradeversion_PrincipalObjectAttributeAccesses() {
        return this._msdyn_upgradeversion_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_upgradeversion_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_upgradeversion_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_upgradeversion_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_upgradeversion_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_upgradeversion_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_upgradeversion_ProcessSession() {
        return this._msdyn_upgradeversion_ProcessSession;
    };
    /**
     * Sets the msdyn_upgradeversion_ProcessSession property value. 
     * @param value Value to set for the msdyn_upgradeversion_ProcessSession property.
     */
    public set msdyn_upgradeversion_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_upgradeversion_ProcessSession = value;
    };
    /**
     * Gets the msdyn_upgradeversion_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_upgradeversion_SyncErrors() {
        return this._msdyn_upgradeversion_SyncErrors;
    };
    /**
     * Sets the msdyn_upgradeversion_SyncErrors property value. 
     * @param value Value to set for the msdyn_upgradeversion_SyncErrors property.
     */
    public set msdyn_upgradeversion_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_upgradeversion_SyncErrors = value;
    };
    /**
     * Gets the msdyn_upgradeversionid property value. 
     * @returns a string
     */
    public get msdyn_upgradeversionid() {
        return this._msdyn_upgradeversionid;
    };
    /**
     * Sets the msdyn_upgradeversionid property value. 
     * @param value Value to set for the msdyn_upgradeversionid property.
     */
    public set msdyn_upgradeversionid(value: string | undefined) {
        this._msdyn_upgradeversionid = value;
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
        writer.writeStringValue("_msdyn_upgraderun_value", this._msdyn_upgraderun_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeDateValue("msdyn_finished", this.msdyn_finished);
        writer.writeCollectionOfObjectValues<Msdyn_upgradestep>("msdyn_msdyn_upgradeversion_msdyn_upgradestep_UpgradeVersion", this.msdyn_msdyn_upgradeversion_msdyn_upgradestep_UpgradeVersion);
        writer.writeStringValue("msdyn_startingversion", this.msdyn_startingversion);
        writer.writeNumberValue("msdyn_status", this.msdyn_status);
        writer.writeStringValue("msdyn_summary", this.msdyn_summary);
        writer.writeStringValue("msdyn_targetversion", this.msdyn_targetversion);
        writer.writeObjectValue<Msdyn_upgraderun>("msdyn_UpgradeRun", this.msdyn_UpgradeRun);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_upgradeversion_AsyncOperations", this.msdyn_upgradeversion_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_upgradeversion_BulkDeleteFailures", this.msdyn_upgradeversion_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_upgradeversion_MailboxTrackingFolders", this.msdyn_upgradeversion_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_upgradeversion_PrincipalObjectAttributeAccesses", this.msdyn_upgradeversion_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_upgradeversion_ProcessSession", this.msdyn_upgradeversion_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_upgradeversion_SyncErrors", this.msdyn_upgradeversion_SyncErrors);
        writer.writeStringValue("msdyn_upgradeversionid", this.msdyn_upgradeversionid);
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
