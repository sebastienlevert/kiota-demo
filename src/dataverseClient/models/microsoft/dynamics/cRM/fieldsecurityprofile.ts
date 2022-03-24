import {createApplicationuserFromDiscriminatorValue} from './createApplicationuserFromDiscriminatorValue';
import {createFieldpermissionFromDiscriminatorValue} from './createFieldpermissionFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createSolutionFromDiscriminatorValue} from './createSolutionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Applicationuser, Crmbaseentity, Fieldpermission, Organization, Solution, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Fieldsecurityprofile extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _applicationuserprofile?: Applicationuser[] | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _description?: string | undefined;
    private _fieldSecurityProfile_SyncErrors?: Syncerror[] | undefined;
    private _fieldsecurityprofileid?: string | undefined;
    private _fieldsecurityprofileidunique?: string | undefined;
    private _ismanaged?: boolean | undefined;
    private _lk_fieldpermission_fieldsecurityprofileid?: Fieldpermission[] | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overwritetime?: Date | undefined;
    private _solution_fieldsecurityprofile?: Solution | undefined;
    private _solutionid?: string | undefined;
    private _systemuserprofiles_association?: Systemuser[] | undefined;
    private _teamprofiles_association?: Team[] | undefined;
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
     * Gets the applicationuserprofile property value. 
     * @returns a applicationuser
     */
    public get applicationuserprofile() {
        return this._applicationuserprofile;
    };
    /**
     * Sets the applicationuserprofile property value. 
     * @param value Value to set for the applicationuserprofile property.
     */
    public set applicationuserprofile(value: Applicationuser[] | undefined) {
        this._applicationuserprofile = value;
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
     * Instantiates a new fieldsecurityprofile and sets the default values.
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
     * Gets the description property value. 
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. 
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the fieldSecurityProfile_SyncErrors property value. 
     * @returns a syncerror
     */
    public get fieldSecurityProfile_SyncErrors() {
        return this._fieldSecurityProfile_SyncErrors;
    };
    /**
     * Sets the fieldSecurityProfile_SyncErrors property value. 
     * @param value Value to set for the FieldSecurityProfile_SyncErrors property.
     */
    public set fieldSecurityProfile_SyncErrors(value: Syncerror[] | undefined) {
        this._fieldSecurityProfile_SyncErrors = value;
    };
    /**
     * Gets the fieldsecurityprofileid property value. 
     * @returns a string
     */
    public get fieldsecurityprofileid() {
        return this._fieldsecurityprofileid;
    };
    /**
     * Sets the fieldsecurityprofileid property value. 
     * @param value Value to set for the fieldsecurityprofileid property.
     */
    public set fieldsecurityprofileid(value: string | undefined) {
        this._fieldsecurityprofileid = value;
    };
    /**
     * Gets the fieldsecurityprofileidunique property value. 
     * @returns a string
     */
    public get fieldsecurityprofileidunique() {
        return this._fieldsecurityprofileidunique;
    };
    /**
     * Sets the fieldsecurityprofileidunique property value. 
     * @param value Value to set for the fieldsecurityprofileidunique property.
     */
    public set fieldsecurityprofileidunique(value: string | undefined) {
        this._fieldsecurityprofileidunique = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Fieldsecurityprofile)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Fieldsecurityprofile)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Fieldsecurityprofile)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Fieldsecurityprofile)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Fieldsecurityprofile)._organizationid_value = n.getStringValue(); },
            "applicationuserprofile": (o, n) => { (o as unknown as Fieldsecurityprofile).applicationuserprofile = n.getCollectionOfObjectValues<Applicationuser>(createApplicationuserFromDiscriminatorValue); },
            "componentstate": (o, n) => { (o as unknown as Fieldsecurityprofile).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Fieldsecurityprofile).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Fieldsecurityprofile).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Fieldsecurityprofile).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "description": (o, n) => { (o as unknown as Fieldsecurityprofile).description = n.getStringValue(); },
            "fieldSecurityProfile_SyncErrors": (o, n) => { (o as unknown as Fieldsecurityprofile).fieldSecurityProfile_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "fieldsecurityprofileid": (o, n) => { (o as unknown as Fieldsecurityprofile).fieldsecurityprofileid = n.getStringValue(); },
            "fieldsecurityprofileidunique": (o, n) => { (o as unknown as Fieldsecurityprofile).fieldsecurityprofileidunique = n.getStringValue(); },
            "ismanaged": (o, n) => { (o as unknown as Fieldsecurityprofile).ismanaged = n.getBooleanValue(); },
            "lk_fieldpermission_fieldsecurityprofileid": (o, n) => { (o as unknown as Fieldsecurityprofile).lk_fieldpermission_fieldsecurityprofileid = n.getCollectionOfObjectValues<Fieldpermission>(createFieldpermissionFromDiscriminatorValue); },
            "modifiedby": (o, n) => { (o as unknown as Fieldsecurityprofile).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Fieldsecurityprofile).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Fieldsecurityprofile).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Fieldsecurityprofile).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Fieldsecurityprofile).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overwritetime": (o, n) => { (o as unknown as Fieldsecurityprofile).overwritetime = n.getDateValue(); },
            "solution_fieldsecurityprofile": (o, n) => { (o as unknown as Fieldsecurityprofile).solution_fieldsecurityprofile = n.getObjectValue<Solution>(createSolutionFromDiscriminatorValue); },
            "solutionid": (o, n) => { (o as unknown as Fieldsecurityprofile).solutionid = n.getStringValue(); },
            "systemuserprofiles_association": (o, n) => { (o as unknown as Fieldsecurityprofile).systemuserprofiles_association = n.getCollectionOfObjectValues<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "teamprofiles_association": (o, n) => { (o as unknown as Fieldsecurityprofile).teamprofiles_association = n.getCollectionOfObjectValues<Team>(createTeamFromDiscriminatorValue); },
            "versionnumber": (o, n) => { (o as unknown as Fieldsecurityprofile).versionnumber = n.getNumberValue(); },
        };
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
     * Gets the lk_fieldpermission_fieldsecurityprofileid property value. 
     * @returns a fieldpermission
     */
    public get lk_fieldpermission_fieldsecurityprofileid() {
        return this._lk_fieldpermission_fieldsecurityprofileid;
    };
    /**
     * Sets the lk_fieldpermission_fieldsecurityprofileid property value. 
     * @param value Value to set for the lk_fieldpermission_fieldsecurityprofileid property.
     */
    public set lk_fieldpermission_fieldsecurityprofileid(value: Fieldpermission[] | undefined) {
        this._lk_fieldpermission_fieldsecurityprofileid = value;
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
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeCollectionOfObjectValues<Applicationuser>("applicationuserprofile", this.applicationuserprofile);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("description", this.description);
        writer.writeCollectionOfObjectValues<Syncerror>("fieldSecurityProfile_SyncErrors", this.fieldSecurityProfile_SyncErrors);
        writer.writeStringValue("fieldsecurityprofileid", this.fieldsecurityprofileid);
        writer.writeStringValue("fieldsecurityprofileidunique", this.fieldsecurityprofileidunique);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeCollectionOfObjectValues<Fieldpermission>("lk_fieldpermission_fieldsecurityprofileid", this.lk_fieldpermission_fieldsecurityprofileid);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeObjectValue<Solution>("solution_fieldsecurityprofile", this.solution_fieldsecurityprofile);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeCollectionOfObjectValues<Systemuser>("systemuserprofiles_association", this.systemuserprofiles_association);
        writer.writeCollectionOfObjectValues<Team>("teamprofiles_association", this.teamprofiles_association);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the solution_fieldsecurityprofile property value. 
     * @returns a solution
     */
    public get solution_fieldsecurityprofile() {
        return this._solution_fieldsecurityprofile;
    };
    /**
     * Sets the solution_fieldsecurityprofile property value. 
     * @param value Value to set for the solution_fieldsecurityprofile property.
     */
    public set solution_fieldsecurityprofile(value: Solution | undefined) {
        this._solution_fieldsecurityprofile = value;
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
     * Gets the systemuserprofiles_association property value. 
     * @returns a systemuser
     */
    public get systemuserprofiles_association() {
        return this._systemuserprofiles_association;
    };
    /**
     * Sets the systemuserprofiles_association property value. 
     * @param value Value to set for the systemuserprofiles_association property.
     */
    public set systemuserprofiles_association(value: Systemuser[] | undefined) {
        this._systemuserprofiles_association = value;
    };
    /**
     * Gets the teamprofiles_association property value. 
     * @returns a team
     */
    public get teamprofiles_association() {
        return this._teamprofiles_association;
    };
    /**
     * Sets the teamprofiles_association property value. 
     * @param value Value to set for the teamprofiles_association property.
     */
    public set teamprofiles_association(value: Team[] | undefined) {
        this._teamprofiles_association = value;
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
