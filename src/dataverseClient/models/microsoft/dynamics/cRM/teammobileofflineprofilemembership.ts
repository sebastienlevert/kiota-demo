import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMobileofflineprofileFromDiscriminatorValue} from './createMobileofflineprofileFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Mailboxtrackingfolder, Mobileofflineprofile, Organization, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Teammobileofflineprofilemembership extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __mobileofflineprofileid_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __teamid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _mobileOfflineProfileId?: Mobileofflineprofile | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _teamId?: Team | undefined;
    private _teammobileofflineprofilemembership_AsyncOperations?: Asyncoperation[] | undefined;
    private _teammobileofflineprofilemembership_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _teammobileofflineprofilemembership_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _teammobileofflineprofilemembership_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _teammobileofflineprofilemembership_ProcessSession?: Processsession[] | undefined;
    private _teammobileofflineprofilemembership_SyncErrors?: Syncerror[] | undefined;
    private _teammobileofflineprofilemembershipid?: string | undefined;
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
     * Gets the _mobileofflineprofileid_value property value. 
     * @returns a string
     */
    public get _mobileofflineprofileid_value() {
        return this.__mobileofflineprofileid_value;
    };
    /**
     * Sets the _mobileofflineprofileid_value property value. 
     * @param value Value to set for the _mobileofflineprofileid_value property.
     */
    public set _mobileofflineprofileid_value(value: string | undefined) {
        this.__mobileofflineprofileid_value = value;
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
     * Gets the _teamid_value property value. 
     * @returns a string
     */
    public get _teamid_value() {
        return this.__teamid_value;
    };
    /**
     * Sets the _teamid_value property value. 
     * @param value Value to set for the _teamid_value property.
     */
    public set _teamid_value(value: string | undefined) {
        this.__teamid_value = value;
    };
    /**
     * Instantiates a new teammobileofflineprofilemembership and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Teammobileofflineprofilemembership)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Teammobileofflineprofilemembership)._createdonbehalfby_value = n.getStringValue(); },
            "_mobileofflineprofileid_value": (o, n) => { (o as unknown as Teammobileofflineprofilemembership)._mobileofflineprofileid_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Teammobileofflineprofilemembership)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Teammobileofflineprofilemembership)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Teammobileofflineprofilemembership)._organizationid_value = n.getStringValue(); },
            "_teamid_value": (o, n) => { (o as unknown as Teammobileofflineprofilemembership)._teamid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Teammobileofflineprofilemembership).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Teammobileofflineprofilemembership).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Teammobileofflineprofilemembership).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Teammobileofflineprofilemembership).importsequencenumber = n.getNumberValue(); },
            "mobileOfflineProfileId": (o, n) => { (o as unknown as Teammobileofflineprofilemembership).mobileOfflineProfileId = n.getObjectValue<Mobileofflineprofile>(createMobileofflineprofileFromDiscriminatorValue); },
            "modifiedby": (o, n) => { (o as unknown as Teammobileofflineprofilemembership).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Teammobileofflineprofilemembership).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Teammobileofflineprofilemembership).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Teammobileofflineprofilemembership).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Teammobileofflineprofilemembership).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Teammobileofflineprofilemembership).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Teammobileofflineprofilemembership).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Teammobileofflineprofilemembership).statuscode = n.getNumberValue(); },
            "teamId": (o, n) => { (o as unknown as Teammobileofflineprofilemembership).teamId = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "teammobileofflineprofilemembership_AsyncOperations": (o, n) => { (o as unknown as Teammobileofflineprofilemembership).teammobileofflineprofilemembership_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "teammobileofflineprofilemembership_BulkDeleteFailures": (o, n) => { (o as unknown as Teammobileofflineprofilemembership).teammobileofflineprofilemembership_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "teammobileofflineprofilemembership_MailboxTrackingFolders": (o, n) => { (o as unknown as Teammobileofflineprofilemembership).teammobileofflineprofilemembership_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "teammobileofflineprofilemembership_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Teammobileofflineprofilemembership).teammobileofflineprofilemembership_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "teammobileofflineprofilemembership_ProcessSession": (o, n) => { (o as unknown as Teammobileofflineprofilemembership).teammobileofflineprofilemembership_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "teammobileofflineprofilemembership_SyncErrors": (o, n) => { (o as unknown as Teammobileofflineprofilemembership).teammobileofflineprofilemembership_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "teammobileofflineprofilemembershipid": (o, n) => { (o as unknown as Teammobileofflineprofilemembership).teammobileofflineprofilemembershipid = n.getStringValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Teammobileofflineprofilemembership).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Teammobileofflineprofilemembership).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Teammobileofflineprofilemembership).versionnumber = n.getNumberValue(); },
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
     * Gets the mobileOfflineProfileId property value. 
     * @returns a mobileofflineprofile
     */
    public get mobileOfflineProfileId() {
        return this._mobileOfflineProfileId;
    };
    /**
     * Sets the mobileOfflineProfileId property value. 
     * @param value Value to set for the MobileOfflineProfileId property.
     */
    public set mobileOfflineProfileId(value: Mobileofflineprofile | undefined) {
        this._mobileOfflineProfileId = value;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_mobileofflineprofileid_value", this._mobileofflineprofileid_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("_teamid_value", this._teamid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Mobileofflineprofile>("mobileOfflineProfileId", this.mobileOfflineProfileId);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeObjectValue<Team>("teamId", this.teamId);
        writer.writeCollectionOfObjectValues<Asyncoperation>("teammobileofflineprofilemembership_AsyncOperations", this.teammobileofflineprofilemembership_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("teammobileofflineprofilemembership_BulkDeleteFailures", this.teammobileofflineprofilemembership_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("teammobileofflineprofilemembership_MailboxTrackingFolders", this.teammobileofflineprofilemembership_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("teammobileofflineprofilemembership_PrincipalObjectAttributeAccesses", this.teammobileofflineprofilemembership_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("teammobileofflineprofilemembership_ProcessSession", this.teammobileofflineprofilemembership_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("teammobileofflineprofilemembership_SyncErrors", this.teammobileofflineprofilemembership_SyncErrors);
        writer.writeStringValue("teammobileofflineprofilemembershipid", this.teammobileofflineprofilemembershipid);
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
     * Gets the teamId property value. 
     * @returns a team
     */
    public get teamId() {
        return this._teamId;
    };
    /**
     * Sets the teamId property value. 
     * @param value Value to set for the TeamId property.
     */
    public set teamId(value: Team | undefined) {
        this._teamId = value;
    };
    /**
     * Gets the teammobileofflineprofilemembership_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get teammobileofflineprofilemembership_AsyncOperations() {
        return this._teammobileofflineprofilemembership_AsyncOperations;
    };
    /**
     * Sets the teammobileofflineprofilemembership_AsyncOperations property value. 
     * @param value Value to set for the teammobileofflineprofilemembership_AsyncOperations property.
     */
    public set teammobileofflineprofilemembership_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._teammobileofflineprofilemembership_AsyncOperations = value;
    };
    /**
     * Gets the teammobileofflineprofilemembership_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get teammobileofflineprofilemembership_BulkDeleteFailures() {
        return this._teammobileofflineprofilemembership_BulkDeleteFailures;
    };
    /**
     * Sets the teammobileofflineprofilemembership_BulkDeleteFailures property value. 
     * @param value Value to set for the teammobileofflineprofilemembership_BulkDeleteFailures property.
     */
    public set teammobileofflineprofilemembership_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._teammobileofflineprofilemembership_BulkDeleteFailures = value;
    };
    /**
     * Gets the teammobileofflineprofilemembership_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get teammobileofflineprofilemembership_MailboxTrackingFolders() {
        return this._teammobileofflineprofilemembership_MailboxTrackingFolders;
    };
    /**
     * Sets the teammobileofflineprofilemembership_MailboxTrackingFolders property value. 
     * @param value Value to set for the teammobileofflineprofilemembership_MailboxTrackingFolders property.
     */
    public set teammobileofflineprofilemembership_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._teammobileofflineprofilemembership_MailboxTrackingFolders = value;
    };
    /**
     * Gets the teammobileofflineprofilemembership_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get teammobileofflineprofilemembership_PrincipalObjectAttributeAccesses() {
        return this._teammobileofflineprofilemembership_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the teammobileofflineprofilemembership_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the teammobileofflineprofilemembership_PrincipalObjectAttributeAccesses property.
     */
    public set teammobileofflineprofilemembership_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._teammobileofflineprofilemembership_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the teammobileofflineprofilemembership_ProcessSession property value. 
     * @returns a processsession
     */
    public get teammobileofflineprofilemembership_ProcessSession() {
        return this._teammobileofflineprofilemembership_ProcessSession;
    };
    /**
     * Sets the teammobileofflineprofilemembership_ProcessSession property value. 
     * @param value Value to set for the teammobileofflineprofilemembership_ProcessSession property.
     */
    public set teammobileofflineprofilemembership_ProcessSession(value: Processsession[] | undefined) {
        this._teammobileofflineprofilemembership_ProcessSession = value;
    };
    /**
     * Gets the teammobileofflineprofilemembership_SyncErrors property value. 
     * @returns a syncerror
     */
    public get teammobileofflineprofilemembership_SyncErrors() {
        return this._teammobileofflineprofilemembership_SyncErrors;
    };
    /**
     * Sets the teammobileofflineprofilemembership_SyncErrors property value. 
     * @param value Value to set for the teammobileofflineprofilemembership_SyncErrors property.
     */
    public set teammobileofflineprofilemembership_SyncErrors(value: Syncerror[] | undefined) {
        this._teammobileofflineprofilemembership_SyncErrors = value;
    };
    /**
     * Gets the teammobileofflineprofilemembershipid property value. 
     * @returns a string
     */
    public get teammobileofflineprofilemembershipid() {
        return this._teammobileofflineprofilemembershipid;
    };
    /**
     * Sets the teammobileofflineprofilemembershipid property value. 
     * @param value Value to set for the teammobileofflineprofilemembershipid property.
     */
    public set teammobileofflineprofilemembershipid(value: string | undefined) {
        this._teammobileofflineprofilemembershipid = value;
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
