import {createAppactionFromDiscriminatorValue} from './createAppactionFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createFileattachmentFromDiscriminatorValue} from './createFileattachmentFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createSavedqueryvisualizationFromDiscriminatorValue} from './createSavedqueryvisualizationFromDiscriminatorValue';
import {createSolutionFromDiscriminatorValue} from './createSolutionFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createThemeFromDiscriminatorValue} from './createThemeFromDiscriminatorValue';
import {createUserqueryvisualizationFromDiscriminatorValue} from './createUserqueryvisualizationFromDiscriminatorValue';
import {Appaction, BooleanManagedProperty, Crmbaseentity, Fileattachment, Organization, Savedqueryvisualization, Solution, Systemuser, Theme, Userqueryvisualization} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Webresource extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _canbedeleted?: BooleanManagedProperty | undefined;
    private _componentstate?: number | undefined;
    private _content?: string | undefined;
    private _content_binary?: string | undefined;
    private _contentfileref?: string | undefined;
    private _contentfileref_name?: string | undefined;
    private _contentjson?: string | undefined;
    private _contentjsonfileref?: string | undefined;
    private _contentjsonfileref_name?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _dependencyxml?: string | undefined;
    private _description?: string | undefined;
    private _displayname?: string | undefined;
    private _introducedversion?: string | undefined;
    private _isavailableformobileoffline?: boolean | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _isenabledformobileclient?: boolean | undefined;
    private _ishidden?: BooleanManagedProperty | undefined;
    private _ismanaged?: boolean | undefined;
    private _languagecode?: number | undefined;
    private _lk_theme_logoid?: Theme[] | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overwritetime?: Date | undefined;
    private _silverlightversion?: string | undefined;
    private _solution_configuration_webresource?: Solution[] | undefined;
    private _solutionid?: string | undefined;
    private _versionnumber?: number | undefined;
    private _webresource_appaction_iconwebresourceid?: Appaction[] | undefined;
    private _webresource_appaction_onclickeventjavascriptwebresourceid?: Appaction[] | undefined;
    private _webresource_FileAttachments?: Fileattachment[] | undefined;
    private _webresource_savedqueryvisualizations?: Savedqueryvisualization[] | undefined;
    private _webresource_userqueryvisualizations?: Userqueryvisualization[] | undefined;
    private _webresourceid?: string | undefined;
    private _webresourceidunique?: string | undefined;
    private _webresourcetype?: number | undefined;
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
     * Gets the canbedeleted property value. 
     * @returns a BooleanManagedProperty
     */
    public get canbedeleted() {
        return this._canbedeleted;
    };
    /**
     * Sets the canbedeleted property value. 
     * @param value Value to set for the canbedeleted property.
     */
    public set canbedeleted(value: BooleanManagedProperty | undefined) {
        this._canbedeleted = value;
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
     * Instantiates a new webresource and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the content property value. 
     * @returns a string
     */
    public get content() {
        return this._content;
    };
    /**
     * Sets the content property value. 
     * @param value Value to set for the content property.
     */
    public set content(value: string | undefined) {
        this._content = value;
    };
    /**
     * Gets the content_binary property value. 
     * @returns a binary
     */
    public get content_binary() {
        return this._content_binary;
    };
    /**
     * Sets the content_binary property value. 
     * @param value Value to set for the content_binary property.
     */
    public set content_binary(value: string | undefined) {
        this._content_binary = value;
    };
    /**
     * Gets the contentfileref property value. 
     * @returns a binary
     */
    public get contentfileref() {
        return this._contentfileref;
    };
    /**
     * Sets the contentfileref property value. 
     * @param value Value to set for the contentfileref property.
     */
    public set contentfileref(value: string | undefined) {
        this._contentfileref = value;
    };
    /**
     * Gets the contentfileref_name property value. 
     * @returns a string
     */
    public get contentfileref_name() {
        return this._contentfileref_name;
    };
    /**
     * Sets the contentfileref_name property value. 
     * @param value Value to set for the contentfileref_name property.
     */
    public set contentfileref_name(value: string | undefined) {
        this._contentfileref_name = value;
    };
    /**
     * Gets the contentjson property value. 
     * @returns a string
     */
    public get contentjson() {
        return this._contentjson;
    };
    /**
     * Sets the contentjson property value. 
     * @param value Value to set for the contentjson property.
     */
    public set contentjson(value: string | undefined) {
        this._contentjson = value;
    };
    /**
     * Gets the contentjsonfileref property value. 
     * @returns a binary
     */
    public get contentjsonfileref() {
        return this._contentjsonfileref;
    };
    /**
     * Sets the contentjsonfileref property value. 
     * @param value Value to set for the contentjsonfileref property.
     */
    public set contentjsonfileref(value: string | undefined) {
        this._contentjsonfileref = value;
    };
    /**
     * Gets the contentjsonfileref_name property value. 
     * @returns a string
     */
    public get contentjsonfileref_name() {
        return this._contentjsonfileref_name;
    };
    /**
     * Sets the contentjsonfileref_name property value. 
     * @param value Value to set for the contentjsonfileref_name property.
     */
    public set contentjsonfileref_name(value: string | undefined) {
        this._contentjsonfileref_name = value;
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
     * Gets the dependencyxml property value. 
     * @returns a string
     */
    public get dependencyxml() {
        return this._dependencyxml;
    };
    /**
     * Sets the dependencyxml property value. 
     * @param value Value to set for the dependencyxml property.
     */
    public set dependencyxml(value: string | undefined) {
        this._dependencyxml = value;
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
     * Gets the displayname property value. 
     * @returns a string
     */
    public get displayname() {
        return this._displayname;
    };
    /**
     * Sets the displayname property value. 
     * @param value Value to set for the displayname property.
     */
    public set displayname(value: string | undefined) {
        this._displayname = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Webresource)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Webresource)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Webresource)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Webresource)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Webresource)._organizationid_value = n.getStringValue(); },
            "canbedeleted": (o, n) => { (o as unknown as Webresource).canbedeleted = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "componentstate": (o, n) => { (o as unknown as Webresource).componentstate = n.getNumberValue(); },
            "content": (o, n) => { (o as unknown as Webresource).content = n.getStringValue(); },
            "content_binary": (o, n) => { (o as unknown as Webresource).content_binary = n.getStringValue(); },
            "contentfileref": (o, n) => { (o as unknown as Webresource).contentfileref = n.getStringValue(); },
            "contentfileref_name": (o, n) => { (o as unknown as Webresource).contentfileref_name = n.getStringValue(); },
            "contentjson": (o, n) => { (o as unknown as Webresource).contentjson = n.getStringValue(); },
            "contentjsonfileref": (o, n) => { (o as unknown as Webresource).contentjsonfileref = n.getStringValue(); },
            "contentjsonfileref_name": (o, n) => { (o as unknown as Webresource).contentjsonfileref_name = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Webresource).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Webresource).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Webresource).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "dependencyxml": (o, n) => { (o as unknown as Webresource).dependencyxml = n.getStringValue(); },
            "description": (o, n) => { (o as unknown as Webresource).description = n.getStringValue(); },
            "displayname": (o, n) => { (o as unknown as Webresource).displayname = n.getStringValue(); },
            "introducedversion": (o, n) => { (o as unknown as Webresource).introducedversion = n.getStringValue(); },
            "isavailableformobileoffline": (o, n) => { (o as unknown as Webresource).isavailableformobileoffline = n.getBooleanValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Webresource).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "isenabledformobileclient": (o, n) => { (o as unknown as Webresource).isenabledformobileclient = n.getBooleanValue(); },
            "ishidden": (o, n) => { (o as unknown as Webresource).ishidden = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Webresource).ismanaged = n.getBooleanValue(); },
            "languagecode": (o, n) => { (o as unknown as Webresource).languagecode = n.getNumberValue(); },
            "lk_theme_logoid": (o, n) => { (o as unknown as Webresource).lk_theme_logoid = n.getCollectionOfObjectValues<Theme>(createThemeFromDiscriminatorValue); },
            "modifiedby": (o, n) => { (o as unknown as Webresource).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Webresource).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Webresource).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Webresource).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Webresource).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overwritetime": (o, n) => { (o as unknown as Webresource).overwritetime = n.getDateValue(); },
            "silverlightversion": (o, n) => { (o as unknown as Webresource).silverlightversion = n.getStringValue(); },
            "solution_configuration_webresource": (o, n) => { (o as unknown as Webresource).solution_configuration_webresource = n.getCollectionOfObjectValues<Solution>(createSolutionFromDiscriminatorValue); },
            "solutionid": (o, n) => { (o as unknown as Webresource).solutionid = n.getStringValue(); },
            "versionnumber": (o, n) => { (o as unknown as Webresource).versionnumber = n.getNumberValue(); },
            "webresource_appaction_iconwebresourceid": (o, n) => { (o as unknown as Webresource).webresource_appaction_iconwebresourceid = n.getCollectionOfObjectValues<Appaction>(createAppactionFromDiscriminatorValue); },
            "webresource_appaction_onclickeventjavascriptwebresourceid": (o, n) => { (o as unknown as Webresource).webresource_appaction_onclickeventjavascriptwebresourceid = n.getCollectionOfObjectValues<Appaction>(createAppactionFromDiscriminatorValue); },
            "webresource_FileAttachments": (o, n) => { (o as unknown as Webresource).webresource_FileAttachments = n.getCollectionOfObjectValues<Fileattachment>(createFileattachmentFromDiscriminatorValue); },
            "webresource_savedqueryvisualizations": (o, n) => { (o as unknown as Webresource).webresource_savedqueryvisualizations = n.getCollectionOfObjectValues<Savedqueryvisualization>(createSavedqueryvisualizationFromDiscriminatorValue); },
            "webresource_userqueryvisualizations": (o, n) => { (o as unknown as Webresource).webresource_userqueryvisualizations = n.getCollectionOfObjectValues<Userqueryvisualization>(createUserqueryvisualizationFromDiscriminatorValue); },
            "webresourceid": (o, n) => { (o as unknown as Webresource).webresourceid = n.getStringValue(); },
            "webresourceidunique": (o, n) => { (o as unknown as Webresource).webresourceidunique = n.getStringValue(); },
            "webresourcetype": (o, n) => { (o as unknown as Webresource).webresourcetype = n.getNumberValue(); },
        };
    };
    /**
     * Gets the introducedversion property value. 
     * @returns a string
     */
    public get introducedversion() {
        return this._introducedversion;
    };
    /**
     * Sets the introducedversion property value. 
     * @param value Value to set for the introducedversion property.
     */
    public set introducedversion(value: string | undefined) {
        this._introducedversion = value;
    };
    /**
     * Gets the isavailableformobileoffline property value. 
     * @returns a boolean
     */
    public get isavailableformobileoffline() {
        return this._isavailableformobileoffline;
    };
    /**
     * Sets the isavailableformobileoffline property value. 
     * @param value Value to set for the isavailableformobileoffline property.
     */
    public set isavailableformobileoffline(value: boolean | undefined) {
        this._isavailableformobileoffline = value;
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
     * Gets the isenabledformobileclient property value. 
     * @returns a boolean
     */
    public get isenabledformobileclient() {
        return this._isenabledformobileclient;
    };
    /**
     * Sets the isenabledformobileclient property value. 
     * @param value Value to set for the isenabledformobileclient property.
     */
    public set isenabledformobileclient(value: boolean | undefined) {
        this._isenabledformobileclient = value;
    };
    /**
     * Gets the ishidden property value. 
     * @returns a BooleanManagedProperty
     */
    public get ishidden() {
        return this._ishidden;
    };
    /**
     * Sets the ishidden property value. 
     * @param value Value to set for the ishidden property.
     */
    public set ishidden(value: BooleanManagedProperty | undefined) {
        this._ishidden = value;
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
     * Gets the languagecode property value. 
     * @returns a integer
     */
    public get languagecode() {
        return this._languagecode;
    };
    /**
     * Sets the languagecode property value. 
     * @param value Value to set for the languagecode property.
     */
    public set languagecode(value: number | undefined) {
        this._languagecode = value;
    };
    /**
     * Gets the lk_theme_logoid property value. 
     * @returns a theme
     */
    public get lk_theme_logoid() {
        return this._lk_theme_logoid;
    };
    /**
     * Sets the lk_theme_logoid property value. 
     * @param value Value to set for the lk_theme_logoid property.
     */
    public set lk_theme_logoid(value: Theme[] | undefined) {
        this._lk_theme_logoid = value;
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
        writer.writeObjectValue<BooleanManagedProperty>("canbedeleted", this.canbedeleted);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeStringValue("content", this.content);
        writer.writeStringValue("content_binary", this.content_binary);
        writer.writeStringValue("contentfileref", this.contentfileref);
        writer.writeStringValue("contentfileref_name", this.contentfileref_name);
        writer.writeStringValue("contentjson", this.contentjson);
        writer.writeStringValue("contentjsonfileref", this.contentjsonfileref);
        writer.writeStringValue("contentjsonfileref_name", this.contentjsonfileref_name);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("dependencyxml", this.dependencyxml);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayname", this.displayname);
        writer.writeStringValue("introducedversion", this.introducedversion);
        writer.writeBooleanValue("isavailableformobileoffline", this.isavailableformobileoffline);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeBooleanValue("isenabledformobileclient", this.isenabledformobileclient);
        writer.writeObjectValue<BooleanManagedProperty>("ishidden", this.ishidden);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeNumberValue("languagecode", this.languagecode);
        writer.writeCollectionOfObjectValues<Theme>("lk_theme_logoid", this.lk_theme_logoid);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeStringValue("silverlightversion", this.silverlightversion);
        writer.writeCollectionOfObjectValues<Solution>("solution_configuration_webresource", this.solution_configuration_webresource);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("versionnumber", this.versionnumber);
        writer.writeCollectionOfObjectValues<Appaction>("webresource_appaction_iconwebresourceid", this.webresource_appaction_iconwebresourceid);
        writer.writeCollectionOfObjectValues<Appaction>("webresource_appaction_onclickeventjavascriptwebresourceid", this.webresource_appaction_onclickeventjavascriptwebresourceid);
        writer.writeCollectionOfObjectValues<Fileattachment>("webresource_FileAttachments", this.webresource_FileAttachments);
        writer.writeCollectionOfObjectValues<Savedqueryvisualization>("webresource_savedqueryvisualizations", this.webresource_savedqueryvisualizations);
        writer.writeCollectionOfObjectValues<Userqueryvisualization>("webresource_userqueryvisualizations", this.webresource_userqueryvisualizations);
        writer.writeStringValue("webresourceid", this.webresourceid);
        writer.writeStringValue("webresourceidunique", this.webresourceidunique);
        writer.writeNumberValue("webresourcetype", this.webresourcetype);
    };
    /**
     * Gets the silverlightversion property value. 
     * @returns a string
     */
    public get silverlightversion() {
        return this._silverlightversion;
    };
    /**
     * Sets the silverlightversion property value. 
     * @param value Value to set for the silverlightversion property.
     */
    public set silverlightversion(value: string | undefined) {
        this._silverlightversion = value;
    };
    /**
     * Gets the solution_configuration_webresource property value. 
     * @returns a solution
     */
    public get solution_configuration_webresource() {
        return this._solution_configuration_webresource;
    };
    /**
     * Sets the solution_configuration_webresource property value. 
     * @param value Value to set for the solution_configuration_webresource property.
     */
    public set solution_configuration_webresource(value: Solution[] | undefined) {
        this._solution_configuration_webresource = value;
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
    /**
     * Gets the webresource_appaction_iconwebresourceid property value. 
     * @returns a appaction
     */
    public get webresource_appaction_iconwebresourceid() {
        return this._webresource_appaction_iconwebresourceid;
    };
    /**
     * Sets the webresource_appaction_iconwebresourceid property value. 
     * @param value Value to set for the webresource_appaction_iconwebresourceid property.
     */
    public set webresource_appaction_iconwebresourceid(value: Appaction[] | undefined) {
        this._webresource_appaction_iconwebresourceid = value;
    };
    /**
     * Gets the webresource_appaction_onclickeventjavascriptwebresourceid property value. 
     * @returns a appaction
     */
    public get webresource_appaction_onclickeventjavascriptwebresourceid() {
        return this._webresource_appaction_onclickeventjavascriptwebresourceid;
    };
    /**
     * Sets the webresource_appaction_onclickeventjavascriptwebresourceid property value. 
     * @param value Value to set for the webresource_appaction_onclickeventjavascriptwebresourceid property.
     */
    public set webresource_appaction_onclickeventjavascriptwebresourceid(value: Appaction[] | undefined) {
        this._webresource_appaction_onclickeventjavascriptwebresourceid = value;
    };
    /**
     * Gets the webresource_FileAttachments property value. 
     * @returns a fileattachment
     */
    public get webresource_FileAttachments() {
        return this._webresource_FileAttachments;
    };
    /**
     * Sets the webresource_FileAttachments property value. 
     * @param value Value to set for the webresource_FileAttachments property.
     */
    public set webresource_FileAttachments(value: Fileattachment[] | undefined) {
        this._webresource_FileAttachments = value;
    };
    /**
     * Gets the webresource_savedqueryvisualizations property value. 
     * @returns a savedqueryvisualization
     */
    public get webresource_savedqueryvisualizations() {
        return this._webresource_savedqueryvisualizations;
    };
    /**
     * Sets the webresource_savedqueryvisualizations property value. 
     * @param value Value to set for the webresource_savedqueryvisualizations property.
     */
    public set webresource_savedqueryvisualizations(value: Savedqueryvisualization[] | undefined) {
        this._webresource_savedqueryvisualizations = value;
    };
    /**
     * Gets the webresource_userqueryvisualizations property value. 
     * @returns a userqueryvisualization
     */
    public get webresource_userqueryvisualizations() {
        return this._webresource_userqueryvisualizations;
    };
    /**
     * Sets the webresource_userqueryvisualizations property value. 
     * @param value Value to set for the webresource_userqueryvisualizations property.
     */
    public set webresource_userqueryvisualizations(value: Userqueryvisualization[] | undefined) {
        this._webresource_userqueryvisualizations = value;
    };
    /**
     * Gets the webresourceid property value. 
     * @returns a string
     */
    public get webresourceid() {
        return this._webresourceid;
    };
    /**
     * Sets the webresourceid property value. 
     * @param value Value to set for the webresourceid property.
     */
    public set webresourceid(value: string | undefined) {
        this._webresourceid = value;
    };
    /**
     * Gets the webresourceidunique property value. 
     * @returns a string
     */
    public get webresourceidunique() {
        return this._webresourceidunique;
    };
    /**
     * Sets the webresourceidunique property value. 
     * @param value Value to set for the webresourceidunique property.
     */
    public set webresourceidunique(value: string | undefined) {
        this._webresourceidunique = value;
    };
    /**
     * Gets the webresourcetype property value. 
     * @returns a integer
     */
    public get webresourcetype() {
        return this._webresourcetype;
    };
    /**
     * Sets the webresourcetype property value. 
     * @param value Value to set for the webresourcetype property.
     */
    public set webresourcetype(value: number | undefined) {
        this._webresourcetype = value;
    };
}
