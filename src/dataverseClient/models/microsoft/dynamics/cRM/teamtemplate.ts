import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Crmbaseentity, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Teamtemplate extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _defaultaccessrightsmask?: number | undefined;
    private _description?: string | undefined;
    private _issystem?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _objecttypecode?: number | undefined;
    private _teamTemplate_SyncErrors?: Syncerror[] | undefined;
    private _teamtemplate_Teams?: Team[] | undefined;
    private _teamtemplateid?: string | undefined;
    private _teamtemplatename?: string | undefined;
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
     * Instantiates a new teamtemplate and sets the default values.
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
     * Gets the defaultaccessrightsmask property value. 
     * @returns a integer
     */
    public get defaultaccessrightsmask() {
        return this._defaultaccessrightsmask;
    };
    /**
     * Sets the defaultaccessrightsmask property value. 
     * @param value Value to set for the defaultaccessrightsmask property.
     */
    public set defaultaccessrightsmask(value: number | undefined) {
        this._defaultaccessrightsmask = value;
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
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Teamtemplate)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Teamtemplate)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Teamtemplate)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Teamtemplate)._modifiedonbehalfby_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Teamtemplate).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Teamtemplate).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Teamtemplate).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "defaultaccessrightsmask": (o, n) => { (o as unknown as Teamtemplate).defaultaccessrightsmask = n.getNumberValue(); },
            "description": (o, n) => { (o as unknown as Teamtemplate).description = n.getStringValue(); },
            "issystem": (o, n) => { (o as unknown as Teamtemplate).issystem = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Teamtemplate).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Teamtemplate).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Teamtemplate).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "objecttypecode": (o, n) => { (o as unknown as Teamtemplate).objecttypecode = n.getNumberValue(); },
            "teamTemplate_SyncErrors": (o, n) => { (o as unknown as Teamtemplate).teamTemplate_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "teamtemplate_Teams": (o, n) => { (o as unknown as Teamtemplate).teamtemplate_Teams = n.getCollectionOfObjectValues<Team>(createTeamFromDiscriminatorValue); },
            "teamtemplateid": (o, n) => { (o as unknown as Teamtemplate).teamtemplateid = n.getStringValue(); },
            "teamtemplatename": (o, n) => { (o as unknown as Teamtemplate).teamtemplatename = n.getStringValue(); },
            "versionnumber": (o, n) => { (o as unknown as Teamtemplate).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the issystem property value. 
     * @returns a boolean
     */
    public get issystem() {
        return this._issystem;
    };
    /**
     * Sets the issystem property value. 
     * @param value Value to set for the issystem property.
     */
    public set issystem(value: boolean | undefined) {
        this._issystem = value;
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
     * Gets the objecttypecode property value. 
     * @returns a integer
     */
    public get objecttypecode() {
        return this._objecttypecode;
    };
    /**
     * Sets the objecttypecode property value. 
     * @param value Value to set for the objecttypecode property.
     */
    public set objecttypecode(value: number | undefined) {
        this._objecttypecode = value;
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
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("defaultaccessrightsmask", this.defaultaccessrightsmask);
        writer.writeStringValue("description", this.description);
        writer.writeBooleanValue("issystem", this.issystem);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeNumberValue("objecttypecode", this.objecttypecode);
        writer.writeCollectionOfObjectValues<Syncerror>("teamTemplate_SyncErrors", this.teamTemplate_SyncErrors);
        writer.writeCollectionOfObjectValues<Team>("teamtemplate_Teams", this.teamtemplate_Teams);
        writer.writeStringValue("teamtemplateid", this.teamtemplateid);
        writer.writeStringValue("teamtemplatename", this.teamtemplatename);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the teamTemplate_SyncErrors property value. 
     * @returns a syncerror
     */
    public get teamTemplate_SyncErrors() {
        return this._teamTemplate_SyncErrors;
    };
    /**
     * Sets the teamTemplate_SyncErrors property value. 
     * @param value Value to set for the TeamTemplate_SyncErrors property.
     */
    public set teamTemplate_SyncErrors(value: Syncerror[] | undefined) {
        this._teamTemplate_SyncErrors = value;
    };
    /**
     * Gets the teamtemplate_Teams property value. 
     * @returns a team
     */
    public get teamtemplate_Teams() {
        return this._teamtemplate_Teams;
    };
    /**
     * Sets the teamtemplate_Teams property value. 
     * @param value Value to set for the teamtemplate_Teams property.
     */
    public set teamtemplate_Teams(value: Team[] | undefined) {
        this._teamtemplate_Teams = value;
    };
    /**
     * Gets the teamtemplateid property value. 
     * @returns a string
     */
    public get teamtemplateid() {
        return this._teamtemplateid;
    };
    /**
     * Sets the teamtemplateid property value. 
     * @param value Value to set for the teamtemplateid property.
     */
    public set teamtemplateid(value: string | undefined) {
        this._teamtemplateid = value;
    };
    /**
     * Gets the teamtemplatename property value. 
     * @returns a string
     */
    public get teamtemplatename() {
        return this._teamtemplatename;
    };
    /**
     * Sets the teamtemplatename property value. 
     * @param value Value to set for the teamtemplatename property.
     */
    public set teamtemplatename(value: string | undefined) {
        this._teamtemplatename = value;
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
